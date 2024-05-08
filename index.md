---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: "编程之路"
  text: "学习编程，创造未来"
  tagline: "从零开始，逐步学习Scratch和C++，掌握编程的基础知识和算法思维，为未来的编程之路铺平道路。"
  actions:
    - text: "开始学习"
      link: "/guide/week-0-2.md"
    - theme: alt
      text: "AI学习助手"
      link: "https://cs50.ai/"
  image:
    src: /cpp.svg
    alt: C Plus Plus

features:
  - title: 编程之路
    details: 从零开始，逐步学习Scratch和C++，掌握编程的基础知识和算法思维，为未来的编程之路铺平道路。
  - title: 创意编程探索
    details: 在课程中，学生将通过Scratch和C++的学习，探索编程的乐趣，培养创造力和解决问题的能力。
  - title: 编程核心技能
    details: 课程涵盖基础编程知识、面向对象编程和算法基础，帮助学生建立坚实的编程基础，为未来的发展打下基础。

---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #5c8dbc 30%, #1a4674);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #5c8dbc 50%, #1a4674 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
