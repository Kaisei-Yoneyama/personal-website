import type { Frontmatter } from "../lib/posts";
import { Button, Hero, Stack, Token } from "../lib/primer-brand";

type HeroAction = {
  href: string;
  text: string;
};

type AnimatedHeroProps = {
  label: string;
  heading: string;
  description: string;
  dates?: Pick<Frontmatter, "published" | "modified">;
  actions?: readonly [HeroAction] | readonly [HeroAction, HeroAction];
};

export default function AnimatedHero({
  label,
  heading,
  description,
  dates,
  actions,
}: AnimatedHeroProps) {
  return (
    <Hero
      variant="gridline"
      enableAnimation
      trailingComponent={
        dates
          ? () => (
              <Stack direction="horizontal" gap={8} padding="none" flexWrap="wrap">
                <Token variant="outline">
                  公開 <time dateTime={dates.published}>{dates.published}</time>
                </Token>
                {dates.modified && (
                  <Token variant="outline">
                    更新 <time dateTime={dates.modified}>{dates.modified}</time>
                  </Token>
                )}
              </Stack>
            )
          : undefined
      }
    >
      <Hero.Label animate>{label}</Hero.Label>
      <Hero.Heading>{heading}</Hero.Heading>
      <Hero.Description>{description}</Hero.Description>
      {actions && (
        <Hero.ButtonGroup>
          {actions.map(({ href, text }) => (
            <Button key={href} as="a" href={href}>
              {text}
            </Button>
          ))}
        </Hero.ButtonGroup>
      )}
    </Hero>
  );
}
