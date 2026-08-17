import { withBase } from "../lib/path";
import { SubdomainNavBar } from "../lib/primer-brand";

export default function Header() {
  return (
    <SubdomainNavBar
      title="Kaisei Yoneyama"
      titleHref={withBase("/")}
      logoHref="https://github.com/Kaisei-Yoneyama"
      fixed={false}
    >
      <SubdomainNavBar.Link href={withBase("/#skills")}>Skills</SubdomainNavBar.Link>
      <SubdomainNavBar.PrimaryAction href="https://github.com/Kaisei-Yoneyama">
        GitHub
      </SubdomainNavBar.PrimaryAction>
    </SubdomainNavBar>
  );
}
