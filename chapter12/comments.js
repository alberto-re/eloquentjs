function skipSpace (string) {
  const skipChars = string.match(/^(\s|#.*)*/)
  return string.slice(skipChars[0].length)
}

module.exports = {
  skipSpace: skipSpace
}
