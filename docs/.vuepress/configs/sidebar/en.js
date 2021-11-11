const generateSidebar = require('../../utils/generateSidebar.js')

module.exports = {
  '/development/': generateSidebar('development', 'Develop'),
  '/guide/': generateSidebar('guide', 'Guide')
}