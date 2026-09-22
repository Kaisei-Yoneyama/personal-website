import Hero from "../islands/hero";
import { withBase } from "../lib/path";

type ErrorPageProps = {
  code: string;
  heading: string;
  description: string;
};

export default function ErrorPage({ code, heading, description }: ErrorPageProps) {
  return (
    <Hero
      label={code}
      heading={heading}
      description={description}
      actions={[{ href: withBase("/"), text: "トップページに戻る" }]}
    />
  );
}
