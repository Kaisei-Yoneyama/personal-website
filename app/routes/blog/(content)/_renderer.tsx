import { reactRenderer } from "@hono/react-renderer";
import { renderToStaticMarkup } from "react-dom/server";

import { Box, Hero, Prose, Stack, Token } from "../../../lib/primer-brand";

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
        <Hero
          variant="gridline"
          trailingComponent={() => (
            <Stack direction="horizontal" gap={8} padding="none" flexWrap="wrap">
              <Token variant="outline">
                公開 <time dateTime={frontmatter.published}>{frontmatter.published}</time>
              </Token>
              {frontmatter.modified && (
                <Token variant="outline">
                  更新 <time dateTime={frontmatter.modified}>{frontmatter.modified}</time>
                </Token>
              )}
            </Stack>
          )}
        >
          <Hero.Label>Blog</Hero.Label>
          <Hero.Heading>{frontmatter.title}</Hero.Heading>
          <Hero.Description>{frontmatter.description}</Hero.Description>
        </Hero>

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
