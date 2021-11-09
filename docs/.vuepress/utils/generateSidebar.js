const fs = require("fs")
const path = require("path")

module.exports = function getSideBar(folder, text) {
  const extension = [".md"]

  const files = fs
    .readdirSync(path.join(`${__dirname}/../../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    ).map(file => `/${folder}/${file}`);

    console.log([{ text, children: [...files] }])

  return [{ text, children: [...files] }]
}
