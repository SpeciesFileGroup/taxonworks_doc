import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {



    const scrollBehavior = router.options.scrollBehavior
    router.options.scrollBehavior = async (...args) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      return scrollBehavior(...args)

    }


})