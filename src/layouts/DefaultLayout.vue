<template>
  <a-layout class="default-layout">
    <!-- 랜딩 이미지 -->
    <div class="landing">
      <nuxt-picture class="cover-image" src="https://dummyimage.com/1902x360/000/fff.png" width="100%" alt="" />
      <div class="description-wrapper">
        <h2 class="description-header">
          Description header
        </h2>
        <p class="description-content">
          Description content
        </p>
      </div>
    </div>
    <a-layout-header class="scroll-header">
      <a-menu mode="horizontal" theme="dark">
        <a-menu-item key="home">
          <a-icon type="home" />
          Home
        </a-menu-item>
      </a-menu>
    </a-layout-header>

    <!-- 컨텐츠 -->
    <a-layout-content>
      <nuxt />
    </a-layout-content>

    <a-layout-footer>
      <a-row type="flex">
        <a-col :xs="{ span: 24 }" :xl="{ span: 20 }" :xxl="{ span: 12 }">
          <h2 class="footer-title">
            저작권 고지사항
          </h2>
          <p class="footer-license">
            이 프로젝트는
            <a href="https://github.com/dungsil/LOH-Tools/blob/main/LICENSE" target="_blank">MIT 라이선스</a>
            에 따라 배포됩니다.
          </p>

          <p class="footer-copyright">
            이 사이트에서 사용되는 이미지 · 텍스트 중 일부는

            <a href="https://www.clovergames.com/" target="_blank">
              클로버게임즈㈜
            </a>

            의 소유입니다.
          </p>

          <p class="footer-copyright">
            기재되어있는 "클로버게임즈", "로드 오브 히어로즈", "Clover Games", "Load of Heros"등은

            <a href="https://www.clovergames.com/" target="_blank">
              클로버게임즈㈜
            </a>

            의 상표 또는 등록 상표입니다.
          </p>

          <p class="footer-copyright">
            위 사이트는

            <a href="https://cdn.clovergames.io/page/ko/tos.html" target="_blank">
              클로버게임즈㈜ 모바일 서비스 이용약관 제 18조 (저작권)
            </a>

            항목을 준수합니다. (확인일자: 2021년 03월 31일)
          </p>

          <p class="footer-copyright">
            권리침해 문의: <a href="https://github.com/dungsil/LOH-Tools/issues">문의하기</a>
          </p>
        </a-col>
        <a-col class="footer-link" :xs="{ span: 24 }" :xl="{ offset: 1, span: 3}" :xxl="{ offset: 8, span: 4 }">
          <h2 class="footer-title">
            링크
          </h2>

          <a-space class="footer-icon-list">
            <a href="https://github.com/dungsil/LOH-Tools" target="_blank">
              <a-icon type="github" />
            </a>
          </a-space>
        </a-col>
      </a-row>
    </a-layout-footer>
</a-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

export default Vue.extend({
  name: 'DefaultLayout',
  head (): MetaInfo {
    return {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;400;700&display=swap'
        }
      ]
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.triggerStickyHeader)
    }
  },
  destroyed () {
    if (process.browser) {
      window.addEventListener('scroll', this.triggerStickyHeader)
    }
  },
  methods: {
    triggerStickyHeader () {
      if (process.browser) {
        const $cover = document.querySelector('.cover-image') as HTMLElement
        const $header = document.querySelector('.scroll-header') as HTMLElement

        const fixedHeaderStartPoint = $cover.offsetHeight
        const currentPoint = window.pageYOffset

        console.log(`header: ${fixedHeaderStartPoint} / current: ${currentPoint}`)
        if (currentPoint > fixedHeaderStartPoint) {
          $header.classList.add('js-sticky')
        } else {
          $header.classList.remove('js-sticky')
        }
      }
    }
  }
})
</script>

<style lang="less">
.default-layout {
  font-family: 'Gothic A1', sans-serif;

  .landing {
    position: relative;
  }

  .scroll-header {
    display: block;
    width: 100%;
  }

  .cover-image {
    display: block;
    width: 100%;
    text-align: center;
  }

  .description {
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-color: rgba(0, 0, 0, .5);
      color: #fff;
    }

    &-header {
      color: #fff;
      font-size: 2.5em;
    }
  }
}

.footer {
  &-title {
    font-size: 14px;
    color: rgba(0, 0, 0, .45);

    margin-left: -8px;
    margin-bottom: 4px;
  }

  &-link {
    font-size: 32px;

    a {
      color: inherit;
    }
  }
}

.js-sticky {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
