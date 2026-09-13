import { reactRenderer } from "@hono/react-renderer";
import { Link, Script } from "honox/server";

import Footer from "../islands/footer";
import Header from "../islands/header";
import { withBase } from "../lib/path";
import { Box, ThemeProvider } from "../lib/primer-brand";

const SITE_NAME = "Kaisei Yoneyama";

export default reactRenderer(({ children, title, description }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={withBase("/favicon.ico")} />
        {/* @ts-expect-error Hono v4.13.0 で React と型が合わなくなったので応急対応 */}
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
        {description && <meta name="description" content={description} />}
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
          <Footer copyrightStatement={`© ${new Date().getFullYear()} ${SITE_NAME}`} />
        </ThemeProvider>
      </body>
    </html>
  );
});
