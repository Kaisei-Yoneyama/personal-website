import { parse } from "node:path";

import * as z from "zod";

import { withBase } from "./path";

const frontmatterSchema = z
  .strictObject({
    title: z.string().min(1),
    description: z.string().min(1),
    published: z.iso.date(),
    modified: z.iso.date().optional(),
  })
  .refine(({ published, modified }) => modified === undefined || modified >= published, {
    error: 'Must be on or after "published"',
    path: ["modified"],
  });

export type Frontmatter = z.infer<typeof frontmatterSchema>;

export type Post = Frontmatter & { slug: string; href: string };

const modules = import.meta.glob("/app/routes/blog/\\(content\\)/*.{md,mdx}", { eager: true });

const result = z
  .record(z.string(), z.object({ frontmatter: frontmatterSchema }))
  .safeParse(modules);

if (!result.success) {
  throw new Error(`Invalid frontmatter:\n${z.prettifyError(result.error)}`);
}

export const posts: readonly Post[] = Object.entries(result.data)
  .map(([path, { frontmatter }]) => {
    const slug = parse(path).name;
    const href = withBase(`/blog/${slug}`);

    return { ...frontmatter, slug, href };
  })
  .toSorted((a, b) => b.published.localeCompare(a.published));
