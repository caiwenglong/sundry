import { defineConfig } from 'vitepress'
import { getNav } from './config/nav'
import { getSidebar } from './config/sidebar'

export default defineConfig({
  title: '个人小站',
  base: '/sundry/',
  appearance: 'dark',
  themeConfig: {
    nav: getNav(),
    sidebar: getSidebar(),
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/caiwenglong/vue-ui.git' }
    ]
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/style/index.css'
      }
    ]
  ],
  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  }
})
