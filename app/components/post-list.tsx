import type { Post } from "../lib/posts";
import { Box, Card, Token } from "../lib/primer-brand";

type PostListProps = {
  posts: readonly Post[];
  headingAs: "h2" | "h3";
};

export default function PostList({ posts, headingAs }: PostListProps) {
  return (
    <>
      {posts.map((post) => (
        // パディングを Hero と揃えるため、Card より細かい指定が可能な Box を利用している
        // ブレークポイントの違いによる多少の不揃いは許容する
        <Box
          key={post.slug}
          paddingBlockStart={32}
          paddingBlockEnd={32}
          paddingInlineStart={{ narrow: 32, regular: 64 }}
          paddingInlineEnd={{ narrow: 32, regular: 64 }}
          borderBlockEndWidth="thin"
          borderColor="muted"
          borderStyle="solid"
        >
          <Card href={post.href} variant="minimal" fullWidth ctaText="続きを読む">
            <Card.Heading as={headingAs}>{post.title}</Card.Heading>
            <Card.Description>{post.description}</Card.Description>
            <Card.Tokens position="block-end">
              <Token variant="outline">
                公開 <time dateTime={post.published}>{post.published}</time>
              </Token>
              {post.modified && (
                <Token variant="outline">
                  更新 <time dateTime={post.modified}>{post.modified}</time>
                </Token>
              )}
            </Card.Tokens>
          </Card>
        </Box>
      ))}
    </>
  );
}
