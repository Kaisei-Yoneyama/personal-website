import { MinimalFooter } from "../lib/primer-brand";

type FooterProps = {
  copyrightStatement: string;
};

export default function Footer({ copyrightStatement }: FooterProps) {
  return (
    <MinimalFooter
      socialLinks={false}
      copyrightStatement={copyrightStatement}
      logoHref="https://github.com/Kaisei-Yoneyama"
    >
      <MinimalFooter.Link href="https://github.com/Kaisei-Yoneyama">GitHub</MinimalFooter.Link>
      <MinimalFooter.Link href="https://twitter.com/kaisei_yoneyama">X</MinimalFooter.Link>
      <MinimalFooter.BackToTop>Back to top</MinimalFooter.BackToTop>
    </MinimalFooter>
  );
}
