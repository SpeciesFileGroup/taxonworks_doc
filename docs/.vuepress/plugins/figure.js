const FIGURE_RE =
  /#(left|right|center)\[(\S.+)]\([\s]*(.*?)[\s]*(\[.*?\])*[\s]*(w\{.*?\}|h\{.*?\})*[\s]*(w\{.*?\}|h\{.*?\})??[)]/im

const IMG_ATTRIBUTES = {
  w: 'width',
  h: 'height'
}

function getFigcaptionAttrs({ width, position }) {
  const attributes = [['class', `figure-${position}`]]

  if (width) {
    attributes.push(['style', `width: ${width}`])
  }

  return attributes
}

function getImageAttribute(param) {
  if (!param) return {}

  const property = param.slice(0, 1)
  const value = param.slice(2, -1)

  return { [IMG_ATTRIBUTES[property]]: value }
}

export default function imageFiguresPlugin(md, options) {
  options = options || {}

  function imageFigures(state) {
    for (let i = 1, l = state.tokens.length; i < l - 1; ++i) {
      const token = state.tokens[i]

      if (token.type !== 'inline') {
        continue
      }

      if (i !== 0 && state.tokens[i - 1].type !== 'paragraph_open') {
        continue
      }
      if (i !== l - 1 && state.tokens[i + 1].type !== 'paragraph_close') {
        continue
      }

      const match = FIGURE_RE.exec(token.content.trim())
      if (!match) {
        continue
      }

      const position = match[1] || 'left'
      const caption = match[2] || ''
      const imageUrl = match[3]
      const altText = (match[4] || '').slice(1, -1)
      const imgAttr = {
        ...getImageAttribute(match[5]),
        ...getImageAttribute(match[6])
      }

      const figure = state.tokens[i - 1]

      figure.type = 'figure_open'
      figure.tag = 'figure'
      state.tokens[i + 1].type = 'figure_close'
      state.tokens[i + 1].tag = 'figure'

      const imageToken = new state.Token('image', 'img', 0)

      imageToken.content = altText
      imageToken.attrs = [
        ['src', imageUrl],
        ['alt', altText],
        ['title', altText],
        ...Object.entries(imgAttr)
      ]

      imageToken.children = []

      token.children = []
      token.children.push(imageToken)

      if (options.figcaption) {
        const figCaption = caption

        if (figCaption) {
          const [captionContent] = md.parseInline(figCaption, state.env)
          const figcaption = new state.Token('figcaption_open', 'figcaption', 1)
          const figcaptionClose = new state.Token(
            'figcaption_close',
            'figcaption',
            -1
          )

          figcaption.attrs = getFigcaptionAttrs({ ...imgAttr, position })

          token.children.push(figcaption)
          token.children.push(...captionContent.children)
          token.children.push(figcaptionClose)
        }
      }
    }
  }

  md.core.ruler.before('linkify', 'figure', imageFigures)
}
