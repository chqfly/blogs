module.exports = {
  title: 'caifly',
  description: 'caifly\'s blogs',
  base: '/blogs/',
  theme: '@vuepress/blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/chqfly/blogs',
        },
      ],
      copyright: [
        {
          text: 'Copyright©2020',
          link: '/'
        }
      ]
    }
  },
}