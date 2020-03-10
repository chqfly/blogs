module.exports = {
  base: '/blogs/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Demo',
        items: [
          { text: 'Demo1', link: '/demo1/' },
          { text: 'Demo2', link: '/demo2/' },
        ]
      }
    ],
    sidebar: [
      '/',
      '/demo1/',
      '/demo2/'
    ]
  }
}