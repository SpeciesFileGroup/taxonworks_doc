const fs = require("fs")
const path = require("path")
const matter = require('gray-matter');
const extension = [".md"]

const getFilesAndDirectories = folderPath => fs
  .readdirSync(folderPath, { withFileTypes: true })
  .filter(item => item.isDirectory() || extension.includes(path.extname(item.name)))

module.exports = function getSideBar(folder, text) {
  const folderPath = path.join(`${__dirname}/../../${folder}`)
  const filesAndDirectories = getFilesAndDirectories(folderPath)

  const getPosition = source => {
    const sourcePath = source.isDirectory()
      ? `${folderPath}/${source.name}/README.md`
      : `${folderPath}/${source.name}`

    if (fs.existsSync(sourcePath)) {
      const file = fs.readFileSync(path.join(sourcePath), 'utf8')
      const markdownObject = matter(file)

      return markdownObject?.data?.sidebarPosition
    }
  }

  filesAndDirectories.sort((a, b) => getPosition(a) - getPosition(b))

  const sideBar = { 
    text,
    link: `/${folder}/`,
    children: [].concat(...filesAndDirectories.map(item => 
      item.isDirectory() 
        ? getSideBar(`${folder}/${item.name}`, item.name) 
        : `/${folder}/${item.name}`
    ))
  }

  return Array.isArray(sideBar) 
    ? sideBar 
    : [sideBar]
}
