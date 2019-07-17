function arrayToList (array) {
  let list = {}
  let root = list
  for (let i = 0; i < array.length; i++) {
    list.value = array[i]
    i === array.length - 1 ? list.rest = null : list.rest = {}
    list = list.rest
  }
  return root
}

function arrayToListRecursive (array) {
  if (array.length === 0) {
    return {}
  } else if (array.length === 1) {
    return {
      value: array.shift(),
      rest: null
    }
  } else {
    return {
      value: array.shift(),
      rest: arrayToListRecursive(array)
    }
  }
}

function listToArray (list) {
  let array = []
  while (list !== null) {
    array.push(list.value)
    list = list.rest
  }
  return array
}

function prepend (element, list) {
  return {
    value: element,
    rest: list
  }
}

function nth (list, number) {
  if (list === null) {
    return undefined
  } else if (number === 0) {
    return list.value
  } else {
    return nth(list.rest, number - 1)
  }
}

module.exports = {
  arrayToList,
  arrayToListRecursive,
  listToArray,
  prepend,
  nth
}
