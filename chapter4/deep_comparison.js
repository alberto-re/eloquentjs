function deepEqual (left, right) {
  let leftType = typeof left
  let rightType = typeof right
  if (leftType === rightType) {
    if (leftType === 'object') {
      if (left === null) {
        return right === null
      } else {
        for (let prop of Object.keys(left)) {
          if (!deepEqual(left[prop], right[prop])) {
            return false
          }
        }
        return true
      }
    } else {
      return left === right
    }
  } else {
    return false
  }
}

module.exports = {
  deepEqual: deepEqual
}
