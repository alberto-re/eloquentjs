class Group {
  constructor () {
    this.group = []
  }

  add (el) {
    if (!this.group.includes(el)) this.group.push(el)
  }

  delete (el) {
    if (this.group.includes(el)) {
      this.group.splice(this.group.indexOf(el), 1)
    }
  }

  has (el) {
    return this.group.includes(el)
  }

  static from (iterable) {
    let group = new Group()
    for (let el of iterable) group.add(el)
    return group
  }
}

module.exports = {
  Group: Group
}
