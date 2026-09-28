import avatar from "../assets/avatar.png?inline";
import { Avatar, Box, Hero, Stack, Text, ThemeProvider, Token } from "../lib/primer-brand";

type OgImageProps = {
  label: string;
  title: string;
  description: string;
  published?: string;
  modified?: string;
  showByline?: boolean;
};

export default function OgImage({
  label,
  title,
  description,
  published,
  modified,
  showByline,
}: OgImageProps) {
  return (
    <ThemeProvider
      colorMode="dark"
      style={{
        backgroundColor: "var(--brand-color-canvas-default)",
        color: "var(--brand-color-text-default)",
        height: "100%",
      }}
    >
      <Stack padding="none" justifyContent="space-between" style={{ height: "100%" }}>
        <Hero
          variant="gridline"
          trailingComponent={
            published
              ? () => (
                  <Stack direction="horizontal" gap={8} padding="none">
                    <Token variant="outline">公開 {published}</Token>
                    {modified && <Token variant="outline">更新 {modified}</Token>}
                  </Stack>
                )
              : undefined
          }
        >
          <Hero.Label>{label}</Hero.Label>
          <Hero.Heading>{title}</Hero.Heading>
          <Hero.Description>{description}</Hero.Description>
        </Hero>
        {showByline && (
          <Box paddingBlockEnd={32} paddingInlineStart={32}>
            <Stack direction="horizontal" padding="none" alignItems="center">
              <Avatar size={48} src={avatar} alt="" />
              <Text>Kaisei Yoneyama</Text>
            </Stack>
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
}
