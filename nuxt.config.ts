import type { NuxtConfig } from '@nuxt/types'

const nuxtConfig: NuxtConfig = {
  srcDir: 'src',
  target: 'static',
  modern: 'client',
  build: {
    loaders: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  buildModules: ['@nuxt/typescript-build', '@nuxt/image', '@nuxtjs/imagemin'],
  css: ['~assets/less/ant-design-vue'],
  plugins: [
    '~plugins/ant-design-vue'
  ],
  image: {
    screens: {
      xs: 480,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600
    }
  }
}

// noinspection JSUnusedGlobalSymbols
export default nuxtConfig
