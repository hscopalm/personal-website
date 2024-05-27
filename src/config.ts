// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Harrison Palmer";
export const SITE_DESCRIPTION =
  "Welcome to my page! I'm a data engineer and adventure blogger. I write about my travels, data projects, and other random thoughts.";
export const MY_NAME = "Harrison Palmer";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
