const box = {
  locked: true,
  unlock () { this.locked = false },
  lock () { this.locked = true },
  _content: [],
  get content () {
    if (this.locked) throw new Error('Locked!')
    return this._content
  }
}

function withBoxUnlocked (fn) {
  box.unlock()
  try {
    fn(box.content)
  } finally {
    box.lock()
  }
}

module.exports = {
  box: box,
  withBoxUnlocked: withBoxUnlocked
}
