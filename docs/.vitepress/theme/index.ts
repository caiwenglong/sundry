// import type { Theme } from 'vitepress'
// eslint-disable-next-line import/no-named-as-default
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'
import { h } from 'vue'
// import CrmUI from '../../../components'
// import AnimationTitle from '../components/AnimationTitle.vue'
import MNavVisitor from '../components/MNavVisitor.vue'
import './styles/index.scss'
export default {
  extends: DefaultTheme,
  Layout() {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, null, {
      /**
       * 相关插槽
       * https://vitepress.dev/guide/extending-default-theme#layout-slots
       * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
       */
      'nav-bar-title-after': () => h(MNavVisitor)
      // 'home-features-after': () => h(AnimationTitle)
    })
  },
  async enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    // ctx.app.component('Demo', AntdTheme)
    // ctx.app.use(CrmUI)
    ctx.app.provide('DEV', process.env.NODE_ENV === 'development')
  }
}
