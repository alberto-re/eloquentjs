function chessboard (size) {
  let board = []
  for (let i = 0; i < size; i++) {
    let row = ''
    for (let j = 0; j < size; j += 2) {
      if (i % 2 === 0) {
        row += ' #'
      } else {
        row += '# '
      }
    }
    board.push(row)
  }
  return board
}

module.exports = {
  chessboard: chessboard
}
