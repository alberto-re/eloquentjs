function replaceQuotes (str) {
  return str.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')
}

module.exports = {
  replaceQuotes: replaceQuotes
}
