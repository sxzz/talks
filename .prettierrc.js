// @ts-check
import sxzz from '@sxzz/prettier-config'

/** @type {import('prettier').Config} */
export default {
  ...sxzz,
  overrides: [
    .../** @type {any} */ (sxzz.overrides),
    {
      files: ['slides.md', 'pages/*.md'],
      options: {
        parser: 'slidev',
        plugins: ['prettier-plugin-slidev'],
      },
    },
  ],
}
