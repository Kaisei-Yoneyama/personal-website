import { createRoute } from "honox/factory";
import type { SimpleIcon } from "simple-icons";
import {
  siDocker,
  siGithub,
  siGithubactions,
  siGoogleappsscript,
  siHono,
  siNodedotjs,
  siOpenjdk,
  siPostgresql,
  siRedis,
  siScala,
  siTypescript,
  siWxt,
} from "simple-icons";

import { Box, Hero, Section, SectionIntro, Tiles } from "../lib/primer-brand";

const SKILLS: readonly { icon: SimpleIcon; name: string }[] = [
  { icon: siTypescript, name: "TypeScript" },
  { icon: siScala, name: "Scala" },
  { icon: siNodedotjs, name: "Node.js" },
  { icon: siOpenjdk, name: "JVM" },
  { icon: siHono, name: "Hono" },
  { icon: siWxt, name: "WXT" },
  { icon: siGoogleappsscript, name: "Apps Script" },
  { icon: siGithub, name: "GitHub Pages" },
  { icon: siPostgresql, name: "PostgreSQL" },
  { icon: siRedis, name: "Redis" },
  { icon: siDocker, name: "Docker" },
  { icon: siGithubactions, name: "GitHub Actions" },
];

function Logo({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default createRoute((c) => {
  return c.render(
    <>
      <Hero variant="gridline">
        <Hero.Label>Web Developer</Hero.Label>
        <Hero.Heading>Kaisei Yoneyama</Hero.Heading>
        <Hero.Description>
          プログラミング教材制作に携わっています。個人開発では、ウェブアプリケーション開発をはじめ、ブラウザー拡張機能開発やボット開発に勤しんでいます。
        </Hero.Description>
        <Hero.PrimaryAction href="https://github.com/Kaisei-Yoneyama">
          GitHub を見る
        </Hero.PrimaryAction>
        <Hero.SecondaryAction href="#skills">スキルを見る</Hero.SecondaryAction>
      </Hero>

      <Box borderBlockStartWidth="thin" borderColor="muted" borderStyle="solid">
        <Section id="skills" paddingBlockStart="normal" paddingBlockEnd="normal">
          <SectionIntro align="center">
            <SectionIntro.Label>Skills</SectionIntro.Label>
            <SectionIntro.Heading size="3">使い慣れている技術</SectionIntro.Heading>
            <SectionIntro.Description>なかでも気に入っているものです。</SectionIntro.Description>
          </SectionIntro>

          <Box marginBlockStart={{ narrow: 32, regular: 48 }}>
            <Tiles variant="gridlines">
              {SKILLS.map((skill) => (
                <Tiles.Item key={skill.name} name={skill.name}>
                  <Logo icon={skill.icon} />
                </Tiles.Item>
              ))}
            </Tiles>
          </Box>
        </Section>
      </Box>
    </>,
    { title: "Kaisei Yoneyama" },
  );
});
