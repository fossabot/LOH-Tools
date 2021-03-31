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
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    }
  }
}

// noinspection JSUnusedGlobalSymbols
export default nuxtConfig
