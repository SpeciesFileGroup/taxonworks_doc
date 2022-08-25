 function figureRenderer (md) {
  return function figureRender(tokens, idx) {
    const all = tokens[idx];
    const fig = all.fig ? `src="${md.utils.escapeHtml(all.fig)}"` : '';
    const figalt = all.figalt ? `alt="${md.utils.escapeHtml(all.figalt)}"` : ''
    const figcaption = all.figcaption 
      ? `<figcaption class="figure-${all.captionPosition || 'left'}">${md.renderInline(all.figcaption)}</figcaption>` 
      : '';

    const figure = `<figure><img ${fig} ${figalt}/>${figcaption}</figure>`

    return figure;
  }
}

function validateStart (src, pos) {
  const startCode = src.charCodeAt(pos);
  const nextCode = src.charCodeAt(pos + 1);


  if (startCode !== 0x23 /* # */) return false

  if (nextCode === 0x5b /* [ */) return true

  if (0x30 /* 0 */ <= nextCode <= 0x39 /* 9 */) return true

  return false
}

const FIGURE_REGEX = /#(\w+)*\[(\S.+)]\([\s]*(.*?)[\s]*(\[.*?\])??[)]/im;

function figureRuler (md) {
  return function figureTokenize(state, silent) {
    const oldPos = state.pos;

    const valid = validateStart(state.src, oldPos);

    if (!valid) return false;

    const match = FIGURE_REGEX.exec(state.src.slice(state.pos, state.src.length));

    if (!match || match.length !== 5) return false;

    const captionPosition = match[1] || false;
    const figcaption = match[2] || false;
    const fig = match[3] || false;
    const figalt = match[4] ? match[4].substring(1, match[4].length - 1) : false;

    const labelStart = state.pos + 2 + (captionPosition.length || 0)
    const labelEnd = labelStart + (figcaption.length || 0)

    if (labelEnd < 0) return false;

    const theState = state;

    if (!silent) {
      theState.pos = labelStart;
      theState.caption = theState.src.slice(labelStart, labelEnd);
      const newState = new theState.md.inline.State(figcaption, theState.md, theState.env, []);
      newState.md.inline.tokenize(newState);

      const token = theState.push('figure', '');
  
      token.captionPosition = captionPosition;
      token.figcaption = figcaption;
      token.fig = fig;
      token.figalt = figalt;
    }

    theState.pos += theState.src.lastIndexOf(')');

  
    return true;
  };
}

module.exports = function figurePlugin(md) {
  md.renderer.rules.figure = figureRenderer(md);
  md.inline.ruler.before('emphasis', 'figure', figureRuler(md));
};
