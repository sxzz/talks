import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            Slidev: 'https://github.com/slidevjs/slidev',
            VueUse: 'https://github.com/vueuse/vueuse',
            VitePress: {
              link: 'https://vitepress.dev/',
              imageUrl: 'https://vitepress.dev/vitepress-logo-mini.svg',
            },
            Pinia: {
              link: 'https://pinia.vuejs.org/',
              imageUrl: 'https://pinia.vuejs.org/logo.svg',
            },
            Elk: 'https://github.com/elk-zone/elk',
            Vue: 'https://github.com/vuejs/core',
            'Vue Router': 'https://github.com/vuejs/router',
            'Vue Vapor': 'https://github.com/vuejs/core-vapor',
            'Vue Macros': 'https://github.com/vue-macros/vue-macros',
            Vite: 'https://github.com/vitejs/vite',
            Unplugin: 'https://github.com/unplugin',
            Nuxt: 'https://github.com/nuxt',
            Oxc: {
              link: 'https://oxc.rs/',
              imageUrl:
                'https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png',
            },
            UnJS: 'https://github.com/unjs',
          },
        })
      },
    },
  },
})
