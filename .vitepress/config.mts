import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程之路",
  description: "学习编程，创造未来",
  head: [['link', { rel: 'icon', href: '/cpp.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '学习资料', link: '/resources' }
    ],

    sidebar: [
      {
        text: '环境配置',
        link: '/environment',
      },
      {
        text: '基本功',
        link: '/basic',
      },
      {
        text: '教学大纲',
        items: [
          { text: 'week 0-2', link: '/guide/week-0-2.md' },
          { text: 'week 3-5', link: '/guide/week-3-5.md' },
          { text: 'week 5-7', link: '/guide/week-5-7.md' },
          { text: 'week 7-9', link: '/guide/week-7-9.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stepbystepcode' }
    ]
  }
})
