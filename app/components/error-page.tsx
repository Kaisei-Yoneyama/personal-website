import { withBase } from "../lib/path";
import { Hero } from "../lib/primer-brand";

type ErrorPageProps = {
  code: string;
  heading: string;
  description: string;
};

export default function ErrorPage({ code, heading, description }: ErrorPageProps) {
  return (
    <Hero variant="gridline">
      <Hero.Label>{code}</Hero.Label>
      <Hero.Heading>{heading}</Hero.Heading>
      <Hero.Description>{description}</Hero.Description>
      <Hero.PrimaryAction href={withBase("/")}>トップページに戻る</Hero.PrimaryAction>
    </Hero>
  );
}
