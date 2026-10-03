import { expect, test } from "vitest";

import { forTakumi } from "../app/lib/og-image";

test("var() を含む border-block を border-top と border-bottom に変換する", () => {
  expect(forTakumi(".a { border-block: 1px solid var(--color) }")).toBe(`.a {
  border-top: 1px solid var(--color);
  border-bottom: 1px solid var(--color);
}
`);
});

test("var() を含む border-inline を border-right と border-left に変換する", () => {
  expect(forTakumi(".a { border-inline: 1px solid var(--color) }")).toBe(`.a {
  border-right: 1px solid var(--color);
  border-left: 1px solid var(--color);
}
`);
});
