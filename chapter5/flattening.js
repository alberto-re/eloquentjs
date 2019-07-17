function flatten (array) {
  return array.reduce((left, right) => left.concat(right))
}

module.exports = {
  flatten: flatten
}
