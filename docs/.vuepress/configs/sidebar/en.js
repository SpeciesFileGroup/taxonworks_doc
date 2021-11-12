const generateSidebar = require('../../utils/generateSidebar.js')

module.exports = {
  '/develop/': generateSidebar('develop', 'Develop'),
  '/guide/': generateSidebar('guide', 'Guide'),
  '/about/': generateSidebar('about', 'About')
}
