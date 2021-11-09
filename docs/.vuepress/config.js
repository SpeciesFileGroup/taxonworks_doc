const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')

module.exports = {
  lang: 'en-US',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.svg' }]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'TaxonWorks Docs',
      description: 'TaxonWorks is an workbench with many tools for describing life, this site contains the documentation.',
      sidebar: sidebar.en
    }
  },

  themeConfig: {
    logo: '/images/taxonworks-black-circle.svg',
    locales: {
      '/': {
        lang: 'en-US',
        navbar: navbar.en,
        sidebar: sidebar.en
      }
    }
  },
}
