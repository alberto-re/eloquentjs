function range (start, stop, step = start < stop ? 1 : -1) {
  let res = []
  for (let i = start; step < 0 ? i >= stop : i <= stop; i += step) {
    res.push(i)
  }
  return res
}

function sum (array) {
  let res = 0
  for (let el of array) res += el
  return res
}

module.exports = {
  range: range,
  sum: sum
}
