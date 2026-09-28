import { basename } from "node:path";

import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";

import OgImage from "../../../components/og-image";
import { renderOgImage } from "../../../lib/og-image";
import { posts } from "../../../lib/posts";

export default createRoute(
  ssgParams(posts.map(({ ogImage }) => ({ filename: basename(ogImage) }))),
  async (c) => {
    const post = posts.find(({ ogImage }) => basename(ogImage) === c.req.param("filename"));

    if (!post) {
      return c.notFound();
    }

    const ogImage = await renderOgImage(
      <OgImage
        label="Blog"
        title={post.title}
        description={post.description}
        published={post.published}
        modified={post.modified}
        showByline
      />,
    );

    return c.body(ogImage, 200, { "Content-Type": "image/png" });
  },
);
