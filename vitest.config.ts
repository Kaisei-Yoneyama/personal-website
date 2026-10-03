import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

const vrtPattern = "**/*.vrt.test.[tj]s?(x)";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        css: true,
        projects: [
          {
            test: {
              name: "vrt",
              include: [vrtPattern],
            },
          },
        ],
      },
    }),
  ),
);
