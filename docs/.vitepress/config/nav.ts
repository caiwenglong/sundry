import type { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    // {
    //   text: '组件',
    //   link: '/components/'
    // },
    {
      text: '导航',
      items: [
        { text: '推荐', link: '/navigation/recommend/index.md' },
        { text: '框架', link: '/navigation/framework/index.md' },
        { text: 'AI', link: '/navigation/AI/index.md' },
        { text: '前端其他站点', link: '/navigation/other/index.md' },
        { text: '他人的导航站', link: '/navigation/navWebsite/index.md' },
        { text: '其他一些工具站', link: '/navigation/recommend/library.md' }
      ]
    },
    {
      text: 'vue',
      items: [
        {
          text: 'vue2',
          items: [
            { text: 'keep-alive', link: '/vue/vue2/keepAlive.md' },
            { text: '生命周期', link: '/vue/vue2/lifeCycle.md' }
          ]
        }
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
      text: 'javascript',
      items: [
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
        },
        {
          text: '防抖节流',
          link: '/interview/javascript/throttle.md'
        },
        {
          text: 'promise',
          link: '/interview/javascript/promise.md'
        }
      ]
    },
    {
      text: '算法题',
      items: [
        { text: '数组', link: '/leetCode/array.md' },
        { text: '指针', link: '/leetCode/pointer.md' },
        { text: '栈', link: '/leetCode/stack.md' }
      ]
    },
    {
      text: 'vite',
      items: [
        { text: 'vite 生命周期', link: '/interview/vite/viteHook.md' },
        { text: 'vite 预构建', link: '/interview/vite/vitePreBuild.md' }
      ]
    },
    {
      text: 'git',
      items: [
        { text: 'git相关技巧', link: '/git/index.md' },
        { text: 'git相关命令', link: '/git/command.md' },
        { text: 'git遇到的问题', link: '/git/problems.md' }
      ]
    },
    {
      text: 'github',
      items: [{ text: 'github page部署流程', link: '/github/index.md' }]
    }
  ]
}
