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
          { text: '6-15', link: '/guide/6-15.md' },
          { text: '6-29', link: '/guide/6-29.md' },
          { text: '07-06', link: '/guide/07-06.md' },
          { text: '07-13', link: '/guide/07-13.md' },
          { text: '07-20', link: '/guide/07-20.md' },
          { text: '07-27', link: '/guide/07-27.md' },
          { text: '08-17', link: '/guide/08-17.md' },
          { text: '08-25', link: '/guide/08-25.md' },
          { text: '08-31', link: '/guide/08-31.md' },
          { text: '09-07', link: '/guide/09-07.md' },
          { text: '09-15', link: '/guide/09-15.md' },
          { text: '09-28', link: '/guide/09-28.md' },
          { text: '10-13', link: '/guide/10-13.md' },
          { text: '10-19', link: '/guide/10-19.md' },
          { text: '11-02', link: '/guide/11-02.md' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stepbystepcode' }
    ]
  }
})
