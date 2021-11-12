const generateSidebar = require('../../utils/generateSidebar.js')

module.exports = {
  '/es/develop/': generateSidebar('es/develop', 'Desarollar'),
  '/es/guide/': generateSidebar('es/guide', 'Guía'),
  '/es/about/': generateSidebar('es/about', 'Acerca')
}
