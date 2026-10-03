import "@blazediff/vitest";
import { expect, test } from "vitest";

import OgImage from "../app/components/og-image";
import { renderOgImage } from "../app/lib/og-image";

test.for([
  {
    testName: "既定ではラベルとタイトルと説明文を描画する",
    snapshotIdentifier: "site",
    ogImageProps: {
      label: "ラベル",
      title: "タイトル",
      description:
        "この文章はダミーです。文字の大きさ、量、字間、行間などを確認するために入れています。",
    },
  },
  {
    testName: "既定に加えて公開日と署名欄を描画する",
    snapshotIdentifier: "post",
    ogImageProps: {
      label: "ラベル",
      title: "タイトル",
      description:
        "この文章はダミーです。文字の大きさ、量、字間、行間などを確認するために入れています。",
      published: "2026-01-01",
      showByline: true,
    },
  },
  {
    testName: "既定に加えて公開日と更新日と署名欄を描画する",
    snapshotIdentifier: "post-modified",
    ogImageProps: {
      label: "ラベル",
      title: "タイトル",
      description:
        "この文章はダミーです。文字の大きさ、量、字間、行間などを確認するために入れています。",
      published: "2026-01-01",
      modified: "2026-01-02",
      showByline: true,
    },
  },
])("$testName", async ({ snapshotIdentifier, ogImageProps }) => {
  const imageBuffer = await renderOgImage(<OgImage {...ogImageProps} />);

  await expect(imageBuffer).toMatchImageSnapshot({
    method: "core",
    snapshotIdentifier,
    threshold: 0,
    includeAA: true,
  });
});
