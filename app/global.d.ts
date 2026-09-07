import "@hono/react-renderer";
import type {} from "hono";
import * as React from "react";

import type { Frontmatter } from "./lib/posts";

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
}

declare module "@hono/react-renderer" {
  interface Props {
    title?: string;
    description?: string;
    frontmatter?: Frontmatter;
  }
}

// mdx/types.js はグローバルな JSX 名前空間を参照するが、React 19 の型では React.JSX に置き換えられている
// https://mdxjs.com/docs/getting-started/#types
declare module "mdx/types.js" {
  export import JSX = React.JSX;
}
