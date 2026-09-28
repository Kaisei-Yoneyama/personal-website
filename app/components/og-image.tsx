import { Hero, Stack, ThemeProvider, Token } from "../lib/primer-brand";

type OgImageProps = {
  label: string;
  title: string;
  description: string;
  published?: string;
  modified?: string;
};

export default function OgImage({ label, title, description, published, modified }: OgImageProps) {
  return (
    <ThemeProvider
      colorMode="dark"
      style={{
        backgroundColor: "var(--brand-color-canvas-default)",
        color: "var(--brand-color-text-default)",
        height: "100%",
      }}
    >
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
    </ThemeProvider>
  );
}
