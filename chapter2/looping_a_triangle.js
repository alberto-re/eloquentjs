function triangle (sideLen) {
  let lines = []
  let msg = ''
  for (let i = 0; i < sideLen; i++) {
    msg += '#'
    lines.push(msg)
  }
  return lines
}

module.exports = {
  triangle: triangle
}
