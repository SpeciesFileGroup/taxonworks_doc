import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  const modelPath = '/develop/Data/models.html'
  const scrollBehavior = router.options.scrollBehavior

  router.options.scrollBehavior = async (to, from, saved) => {
    if (
      to.path != from.path && 
      from.path !== modelPath &&
      to.path === modelPath
    ) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    return scrollBehavior(to, from, saved)
  }
})