import { createRoute } from "honox/factory";

import PostList from "../../components/post-list";
import Hero from "../../islands/hero";
import { posts } from "../../lib/posts";
import { Box, Text } from "../../lib/primer-brand";

const description = "開発の記録や学んだことを書いています。";

export default createRoute((c) => {
  return c.render(
    <>
      <Hero label="Blog" heading="ブログ" description={description} />

      <Box borderBlockStartWidth="thin" borderColor="muted" borderStyle="solid">
        {posts.length === 0 ? (
          <Box
            paddingBlockStart={32}
            paddingBlockEnd={32}
            paddingInlineStart={{ narrow: 32, regular: 64 }}
            paddingInlineEnd={{ narrow: 32, regular: 64 }}
          >
            <Text as="p" variant="muted">
              まだ記事はありません。
            </Text>
          </Box>
        ) : (
          <PostList posts={posts} headingAs="h2" />
        )}
      </Box>
    </>,
    { title: "Blog", description },
  );
});
