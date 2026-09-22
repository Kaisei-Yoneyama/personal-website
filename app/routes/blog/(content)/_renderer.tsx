import { reactRenderer } from "@hono/react-renderer";
import { renderToStaticMarkup } from "react-dom/server";

import Hero from "../../../islands/hero";
import { withBase } from "../../../lib/path";
import { Box, Breadcrumbs, Prose } from "../../../lib/primer-brand";

export default reactRenderer(({ children, Layout, title, description, frontmatter }) => {
  // /blog 配下のエラーページ (frontmatter なし) もここを通る
  if (!frontmatter) {
    return (
      <Layout title={title} description={description}>
        {children}
      </Layout>
    );
  }

  const html = renderToStaticMarkup(children);

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <>
        <Box
          paddingBlockStart={{ narrow: 32, regular: 64 }}
          paddingInlineStart={{ narrow: 32, regular: 64 }}
          paddingInlineEnd={{ narrow: 32, regular: 64 }}
        >
          <Breadcrumbs>
            <Breadcrumbs.Item href={withBase("/")}>ホーム</Breadcrumbs.Item>
            <Breadcrumbs.Item href={withBase("/blog/")}>ブログ</Breadcrumbs.Item>
            <Breadcrumbs.Item href="" selected>
              {frontmatter.title}
            </Breadcrumbs.Item>
          </Breadcrumbs>
        </Box>

        <Hero
          label="Blog"
          heading={frontmatter.title}
          description={frontmatter.description}
          dates={{ published: frontmatter.published, modified: frontmatter.modified }}
        />

        {/* Hero のパディングに合わせて罫線から離す */}
        <Box
          padding={{ narrow: 32, regular: 64 }}
          borderBlockStartWidth="thin"
          borderColor="muted"
          borderStyle="solid"
        >
          <Prose html={html} enableFullWidth />
        </Box>
      </>
    </Layout>
  );
});
