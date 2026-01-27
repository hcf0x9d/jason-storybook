import type { StorybookConfig } from '@storybook/nextjs-vite';

// Get base path from environment variable (for GitHub Pages subdirectory deployment)
// If your repo is served from username.github.io/repo-name, set this to '/repo-name'
// Leave empty for root domain (username.github.io) or custom domain
const basePath = process.env.STORYBOOK_BASE_PATH || '';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  // Configure base path for GitHub Pages if needed
  ...(basePath && {
    viteFinal: async (config) => {
      if (config.base === undefined || config.base === '/') {
        config.base = basePath;
      }
      return config;
    },
  }),
};
export default config;