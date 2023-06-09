import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '组件',
      link: '/components/'
    },
    {
      text: '导航',
      items: [
        { text: '推荐', link: '/navigation/recommend/index.md' },
        { text: '框架', link: '/navigation/framework/index.md' },
        { text: 'AI', link: '/navigation/AI/index.md' },
        { text: '前端其他站点', link: '/navigation/other/index.md' },
        { text: '其他一些工具站', link: '/navigation/recommend/library.md' }
      ]
    },
    {
      text: '螺丝钉',
      items: [
        { text: '常用方法整理', link: 'common/function' },
        { text: '常用正则', link: 'common/regexp' }
      ]
    },
    {
      text: '火箭',
      items: [
        {
          text: 'javascript',
          items: [
            { text: 'keep-alive', link: '/interview/javascript/keepAlive.md' },
            {
              text: 'call-apply-bind',
              link: '/interview/javascript/callApplyBind.md'
            },
            {
              text: 'js-event-loop',
              link: '/interview/javascript/jsEventLoop.md'
            },
            {
              text: 'js 内存泄漏',
              link: '/interview/javascript/jsMemoryLeak.md'
            }
          ]
        },
        {
          text: 'vite',
          items: [
            { text: 'vite 生命周期', link: '/interview/vite/viteHook.md' },
            { text: 'vite 预构建', link: '/interview/vite/vitePreBuild.md' }
          ]
        }
      ]
    },
    {
      text: 'git',
      items: [
        { text: 'git相关技巧', link: '/git/index.md' },
        { text: 'git相关命令', link: '/git/command.md' }
      ]
    }
  ]
}
