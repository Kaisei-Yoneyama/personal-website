import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

function normalizeBase(base = ""): `/${string}` {
  const path = base.split("/").filter(Boolean).join("/");
  return path ? `/${path}/` : "/";
}

export default defineConfig(({ mode }) => {
  // 開発サーバーでは Link/Script がベース URL を付与しないパスを書き出すため / に固定する
  const base = mode === "development" ? "/" : normalizeBase(process.env.BASE_PATH);

  if (mode === "client") {
    return {
      base,
      plugins: [client({ input: ["/app/client.ts", "/app/style.css"], jsxImportSource: "react" })],
    };
  }

  return {
    build: { emptyOutDir: false },
    // CommonJS/UMD は SSR でバンドルすると評価に失敗するため、外部化して Node.js の require に解決させる
    ssr: { external: ["react", "react-dom", "@primer/react-brand"] },
    // base を直接指定すると内部で @hono/vite-dev-server に上書きされるため devServer を経由させる
    plugins: [honox({ devServer: { base } }), ssg({ entry })],
  };
});
