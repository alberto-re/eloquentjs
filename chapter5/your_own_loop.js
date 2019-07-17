function loop (value, test, update, body) {
  while (test(value)) {
    body()
    value = update(value)
  }
}

module.exports = {
  loop: loop
}
