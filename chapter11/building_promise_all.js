function promiseAll (promises) {
  return new Promise((resolve, reject) => {
    let results = []
    let queue = promises.length

    if (promises.length === 0) {
      resolve(results)
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(res => {
        results[i] = res
        queue = queue - 1
        if (queue === 0) {
          resolve(results)
        }
      }).catch(reject)
    }
  })
}

module.exports = {
  promiseAll: promiseAll
}
