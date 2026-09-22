import { createClient } from "honox/client";
import { createElement, type ReactNode } from "react";
import { createRoot } from "react-dom/client";

void createClient<ReactNode>({
  // honojs/honox#240 の応急対応で createRoot を使用している
  hydrate: (elem, root) => createRoot(root).render(elem),
  createElement: (type, props) => createElement(type, props),
});
