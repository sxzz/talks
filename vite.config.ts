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
            Elk: 'https://github.com/elk-zone/elk',
            Vue: 'https://github.com/vuejs/core',
            'Vue Vapor': 'https://github.com/vuejs/core-vapor',
            'Vue Macros': 'https://github.com/vue-macros/vue-macros',
            Vite: 'https://github.com/vitejs/vite',
            Unplugin: 'https://github.com/unplugin',
          },
        })
      },
    },
  },
})