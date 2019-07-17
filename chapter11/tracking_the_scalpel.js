const { anyStorage } = require('./11_async')

async function locateScalpel (nest) {
  let current = nest.name
  while (true) {
    let next = await anyStorage(nest, current, 'scalpel')
    if (next === current) {
      return current
    }
    current = next
  }
}

function locateScalpelNoAsyncAwait (nest) {
  function iterNests (current) {
    return anyStorage(nest, current, 'scalpel').then(next => {
      if (next === current) {
        return current
      } else {
        return iterNests(next)
      }
    })
  }
  return iterNests(nest.name)
}

module.exports = {
  locateScalpel: locateScalpel,
  locateScalpelNoAsyncAwait: locateScalpelNoAsyncAwait
}
