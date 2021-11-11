const fs = require("fs")
const path = require("path")

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

  const sideBar = { 
    text,
    link: `/${folder}/`,
    children: [].concat(
      files, 
      ...childrenFolders.map(folderName => getSideBar(`${folder}/${folderName}`, folderName))
    )
  }

  return Array.isArray(sideBar) 
    ? sideBar 
    : [sideBar]
}
