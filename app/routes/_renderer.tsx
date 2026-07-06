import { reactRenderer } from "@hono/react-renderer";
import { Link, Script } from "honox/server";

import { ThemeProvider } from "../lib/primer-brand";

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={`${import.meta.env.BASE_URL}favicon.ico`} />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {title && <title>{title}</title>}
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
});
