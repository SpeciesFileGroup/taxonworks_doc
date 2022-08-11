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

      return source.isDirectory() 
        ? markdownObject?.data?.sidebarParentPosition
        : markdownObject?.data?.sidebarPosition
    }
  }

  const sortedFilesAndDirectories = filesAndDirectories.slice().sort((a, b) => sortFunction(getPosition(b), getPosition(a)))

  const sideBar = { 
    text,
    link: `/${folder}/`,
    children: [].concat(...sortedFilesAndDirectories.map(item => 
      item.isDirectory() 
        ? getSideBar(`${folder}/${item.name}`, item.name) 
        : `/${folder}/${item.name}`
    ))
  }

  return Array.isArray(sideBar) 
    ? sideBar 
    : [sideBar]
}

function sortFunction (a, b, asc) {
  if (a === undefined) return 1
  if (b === undefined) return -1
  if (a === undefined && b === null) return 0

  const result = a - b

  if (isNaN(result)) {
    return (asc)
      ? a?.toString().localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      : b?.toString().localeCompare(a, undefined, { numeric: true, sensitivity: 'base' })
  } else {
    return (asc) ? result : -result
  }
}
