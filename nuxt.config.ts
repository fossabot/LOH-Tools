import type { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  srcDir: 'src',
  buildModules: ['@nuxt/typescript-build', '@nuxt/image'],
  plugins: [
    '~plugins/ant-design-vue'
  ]
}

// noinspection JSUnusedGlobalSymbols
export default nuxtConfig
