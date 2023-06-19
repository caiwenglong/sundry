import type { NavLink } from '../components/type'

interface NavData {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '框架',
    items: [
      {
        icon: 'https://toolsdar.com/wp-content/uploads/2020/11/LSlogo.png',
        title: '工具达人',
        desc: '收集一些工具网站',
        link: 'https://toolsdar.com/'
      },
      {
        icon: 'https://api.iowen.cn/favicon/julesblom.com.png',
        title: 'React API 地图',
        desc: '一种学习 React API 的方法，即通过将其组织成一个空间地图来帮助理解。作者将 React 的不同部分联系在一起，形成了一个可供探索的结构，并在 “推荐阅读” 部分中添加了一些经过筛选的优质博客文章链接，以便更好地理解 React API',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly9qdWxlc2Jsb20uY29tL3dyaXRpbmcvbWFwLW9mLXJlYWN0LWFwaQ%3D%3D'
      },
      {
        icon: 'https://api.iowen.cn/favicon/www.techempower.com.png',
        title: '框架性能对比',
        desc: '前端技术选型工具',
        link: 'http://nav.poetries.top/go/?url=aHR0cHM6Ly93d3cudGVjaGVtcG93ZXIuY29tL2JlbmNobWFya3MvI3NlY3Rpb249ZGF0YS1yMjE%3D'
      }
    ]
  }
]
