import { createClient } from "honox/client";
import { createElement, type ReactNode } from "react";
import { hydrateRoot } from "react-dom/client";

void createClient<ReactNode>({
  hydrate: (elem, root) => void hydrateRoot(root, elem),
  createElement: (type, props) => createElement(type, props),
});
