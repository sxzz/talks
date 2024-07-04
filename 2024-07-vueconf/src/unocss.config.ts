import config from '@slidev/client/uno.config'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config as any,
  {
    shortcuts: {
      'text-gradient':
        'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    rules: [['font-smiley', { 'font-family': 'Smiley Sans' }]],
    presets: [
      presetWebFonts({
        fonts: {
          mono: 'DM Mono',
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
        },
      }),
    ],
  },
])
