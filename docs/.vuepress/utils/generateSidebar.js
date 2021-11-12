const fs = require("fs")
const path = require("path")
const matter = require('gray-matter');

const getDirectories = source =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

module.exports = function getSideBar(folder, text) {
  const extension = [".md"]
  const folderPath = path.join(`${__dirname}/../../${folder}`)
  const childrenFolders = getDirectories(folderPath)
  const files = fs
    .readdirSync(folderPath)
    .filter(
      item =>
        fs.statSync(path.join(folderPath, item)).isFile() &&
        extension.includes(path.extname(item))
    ).map(file => `/${folder}/${file}`);

  const orderedFile = files.sort((a, b) => {
    const fileA = fs.readFileSync(path.join(`${__dirname}/../../${a}`), 'utf8')
    const fileB = fs.readFileSync(path.join(`${__dirname}/../../${b}`), 'utf8')
    const objectA = matter(fileA)
    const objectB = matter(fileB)

    const aPosition = objectA?.data?.sidebarPosition
    const bPosition = objectB?.data?.sidebarPosition

    return aPosition - bPosition
  })

  const sideBar = { 
    text,
    link: `/${folder}/`,
    children: [].concat(
      orderedFile, 
      ...childrenFolders.map(folderName => getSideBar(`${folder}/${folderName}`, folderName))
    )
  }

  return Array.isArray(sideBar) 
    ? sideBar 
    : [sideBar]
}
