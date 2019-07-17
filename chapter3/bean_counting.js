function countBs (string) {
  return countChar(string, 'B')
}

function countChar (string, chr) {
  let count = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === chr) {
      count++
    }
  }
  return count
}

module.exports = {
  countBs: countBs,
  countChar: countChar
}
