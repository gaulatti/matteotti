import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (existingConfig) => {
    return {
      ...existingConfig,
      css: {
        ...existingConfig.css,
        postcss: {
          plugins: [tailwindcss(), autoprefixer()]
        }
      },
      resolve: {
        ...existingConfig.resolve,
        alias: {
          ...(existingConfig.resolve?.alias || {}),
        }
      },
      plugins: [
        ...(existingConfig.plugins || []),
        tsconfigPaths()
      ]
    };
  }
};

export default config;