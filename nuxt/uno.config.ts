import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      collections: {
        app: FileSystemIconLoader('./assets/icons', (svg: string) =>
          svg.replaceAll(/#fff/g, 'currentColor'),
        ),
      },
    }),
  ],
  transformers: [transformerDirectives()],
})
