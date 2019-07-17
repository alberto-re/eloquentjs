const array = function (...values) {
  return values
}

const length = function (array) {
  return array.length
}

const element = function (array, n) {
  return array[n]
}

module.exports = {
  array: array,
  length: length,
  element: element
}
