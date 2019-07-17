function reverseArray (array) {
  let reversed = []
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
  }
  return reversed
}

function reverseArrayInPlace (array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let tmp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tmp
  }
}

module.exports = {
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace
}
