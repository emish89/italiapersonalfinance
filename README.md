# Italia Personal Finance Wiki - Reddit

## Usage

This project is based on [Astro Framework](https://github.com/withastro/astro) with [UnoCSS](https://uno.antfu.me/) and [Brutal theme](https://github.com/ElianCodes/brutal)

## Articles

All the wiki articles are in the `src/content/blog` folder, they are markdown (`.md` and `.mdx`) files.
You can create a PR for adding new articles or change the content of the existing ones only playing with markdown.
No other knowledge needed

### Commands

All commands are run from the root of the project, from a terminal:

(Here I use NPM, no problem if you use PNPM or Yarn)

| Command            | Action                                             |
| :----------------- | :------------------------------------------------- |
| `npm install`      | Installs dependencies                              |
| `npm dev`          | Starts local dev server at `localhost:3000`        |
| `npm build`        | Build your production site to `./dist/`            |
| `npm preview`      | Preview your build locally, before deploying       |
| `npm astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm astro --help` | Get help using the Astro CLI                       |

## Integrations

###

In this project, I'm using [UnoCSS](https://uno.antfu.me/) to generate the CSS. It's a utility-first CSS framework that uses a single class to style elements. It's very easy to use and has a lot of features. It's setup to be completely compatible with TailwindCSS, with the advantage of being able to use PureCSS icons. You can always switch out UnoCSS for TailwindCSS if you want to, without breaking the general styles.

### Sitemap

To generate the sitemap, you don't need to do anything. It's automatically generated when you build your site. You'll just need to switch out the `site` on `astro.config.mjs` to your own.

```js title="astro.config.mjs"
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
});
```

### RSS

The RSS feed is automatically generated from the Markdown files in the `src/content/blog` folder.

The RSS will output to `https://example.com/feed.xml` by default. Can be changed by renaming `src/pages/feed.xml.js`.

## Components

### `components/blog/`

This directory contains all components for the blog.

### `components/errors/`

This directory contains all error components.

#### `components/errors/404.astro`

This component is used when a page is not found.

### `components/generic/`

This directory contains all generic components, reused over multiple pages.

### `components/home/`

This directory contains all components for the home page.

### `components/layout/`

This directory contains all layout components. For instance, the header and footer and `<head>` section.

## Suggestions

All the suggestions in terms of wiki content are really appreciated. You can create a PR with the markdown file or write us the content in a proper feature request.

## Disclaimer

The information provided on this wiki is for general informational purposes only. It is not intended as, and should not be considered, financial advice. We strongly recommend that you consult with a qualified financial advisor or professional before making any financial decisions.

Accuracy and Completeness:
While we strive to provide accurate and up-to-date information, thi wiki makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information provided. Any reliance you place on such information is therefore strictly at your own risk.

Investment Risks:
Investing in financial markets involves risk, and past performance is not indicative of future results. The value of investments may fluctuate, and investors may lose their entire investment. The wiki is not responsible for any financial loss or damage that may arise from your use of the information provided.

If you have any questions about this disclaimer or the information on this wiki, please contact us through Github.
