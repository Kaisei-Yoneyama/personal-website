import { reactRenderer } from "@hono/react-renderer";
import { Link, Script } from "honox/server";

import Header from "../islands/header";
import { withBase } from "../lib/path";
import { Box, MinimalFooter, ThemeProvider } from "../lib/primer-brand";

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={withBase("/favicon.ico")} />
        {/* @ts-expect-error Hono v4.13.0 で React と型が合わなくなったので応急対応 */}
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {title && <title>{title}</title>}
      </head>
      <body>
        <ThemeProvider
          colorMode="dark"
          style={{
            backgroundColor: "var(--brand-color-canvas-default)",
            color: "var(--brand-color-text-default)",
          }}
        >
          <Header />
          <main>
            <Box
              borderInlineStartWidth="thin"
              borderInlineEndWidth="thin"
              borderColor="muted"
              borderStyle="solid"
              // Grid や Hero の max-width に合わせて 1280px にする
              style={{ maxInlineSize: "1280px", marginInline: "auto" }}
            >
              {children}
            </Box>
          </main>
          <MinimalFooter
            socialLinks={false}
            copyrightStatement={`© ${new Date().getFullYear()} Kaisei Yoneyama`}
            logoHref="https://github.com/Kaisei-Yoneyama"
          >
            <MinimalFooter.Link href="https://github.com/Kaisei-Yoneyama">
              GitHub
            </MinimalFooter.Link>
            <MinimalFooter.Link href="https://twitter.com/kaisei_yoneyama">X</MinimalFooter.Link>
          </MinimalFooter>
        </ThemeProvider>
      </body>
    </html>
  );
});
