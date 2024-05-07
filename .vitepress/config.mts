import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "编程之路",
  description: "学习编程，创造未来",
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
        text: '教学大纲',
        items: [
          { text: 'week 0', link: '/guide/week-0.md' },
          { text: 'week 1', link: '/guide/week-1.md' },
          { text: 'week 2', link: '/guide/week-2.md' },
          { text: 'week 3', link: '/guide/week-3.md' },
          { text: 'week 4', link: '/guide/week-4.md' },
          { text: 'week 5', link: '/guide/week-5.md' },
          { text: 'week 6', link: '/guide/week-6.md' },
          { text: 'week 7', link: '/guide/week-7.md' },
          { text: 'week 8', link: '/guide/week-8.md' },
          { text: 'week 9', link: '/guide/week-9.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stepbystepcode' }
    ]
  }
})
