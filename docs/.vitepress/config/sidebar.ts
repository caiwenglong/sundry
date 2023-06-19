import type { DefaultTheme } from 'vitepress'

export const getSidebar = (): DefaultTheme.Sidebar => {
  return {
    '/components/': [
      {
        text: '按钮组件',
        link: '/components/button/'
      }
    ],
    '/interview/': [
      {
        text: 'javascript',
        collapsed: false,
        items: [
          { text: 'keep-alive', link: '/interview/javascript/keepAlive.md' },
          {
            text: 'call-apply-bind',
            link: '/interview/javascript/callApplyBind.md'
          },
          { text: 'js事件循环', link: '/interview/javascript/jsEventLoop.md' },
          { text: 'js 内存泄漏', link: '/interview/javascript/jsMemoryLeak.md' }
        ]
      },
      {
        text: 'vite',
        collapsed: false,
        items: [
          { text: 'vite 生命周期', link: '/interview/vite/viteHook.md' },
          { text: 'vite 预构建', link: '/interview/vite/vitePreBuild.md' }
        ]
      }
    ]
  }
}
