function every (array, predicate) {
  for (let el of array) {
    if (!predicate(el)) {
      return false
    }
  }
  return true
}

module.exports = {
  every: every
}
