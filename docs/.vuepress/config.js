import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'
import figurePlugin from './plugins/figure'
import taskListPlugin from 'markdown-it-task-lists'
import * as navbar from './configs/navbar'
import * as sidebar from './configs/sidebar'
import * as pluginsLang from './configs/plugins'

export default defineUserConfig({
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/images/favicon.svg' }]],

  bundler: viteBundler(),

  locales: {
    '/': {
      lang: 'en-US',
      title: 'TaxonWorks Docs',
      description:
        'TaxonWorks is a workbench with many tools for describing life. This site contains the documentation.',
      sidebar: sidebar.en
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Documentación de TaxonWorks',
      description:
        'TaxonWorks es un banco de trabajo con muchas herramientas para describir la vida. Este sitio contiene la documentación'
    }
  },

  markdown: {
    code: {
      lineNumbers: false
    }
  },

  clientAppEnhanceFiles: path.resolve(
    __dirname,
    './configs/clientAppEnhance.js'
  ),

  extendsMarkdown: (md) => {
    md.use(taskListPlugin)
    md.use(figurePlugin, { figcaption: true })
  },

  extendsMarkdownOptions: (markdownOptions) => {
    if (markdownOptions.headers === false) return
    markdownOptions.headers ??= {}
    if (markdownOptions.headers.level) return
    markdownOptions.headers.level = [2, 3, 4, 5, 6]
  },

  theme: defaultTheme({
    docsRepo: 'https://github.com/SpeciesFileGroup/taxonworks_doc',
    docsBranch: 'development',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',

    logo: '/images/taxonworks-black-circle.svg',
    logoDark: '/images/taxonworks-white-circle.svg',

    locales: {
      '/': {
        lang: 'en-US',
        navbar: navbar.en,
        sidebar: sidebar.en,
        sidebarDepth: 3
      },
      '/es/': {
        navbar: navbar.es,
        selectLanguageName: 'Español',
        selectLanguageText: 'Español',
        selectLanguageAriaLabel: 'Español',

        sidebar: sidebar.es,
        sidebarDepth: 3,

        editLinkText: 'Edita esta pagina en GitHub',
        lastUpdatedText: 'Ultima actualización',
        contributorsText: 'Contribuidores',

        tip: 'Tip',
        warning: 'Advertencia',
        danger: 'Cuidado',

        notFound: [
          'Esta pagina no existe',
          'Parece que ha entrado a un link erroneo'
        ],
        backToHome: 'Volver al inicio',

        openInNewWindow: 'Abrir en nueva ventana',
        toggleDarkMode: 'Alternar al modo oscuro',
        toggleSidebar: 'Alternar barra lateral'
      }
    }
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': pluginsLang.en,
        '/es/': pluginsLang.es
      }
    })
  ]
})
