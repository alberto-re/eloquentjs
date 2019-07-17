class IterGroup {
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
    let group = new IterGroup()
    for (let el of iterable) group.add(el)
    return group
  }
}

class GroupIterator {
  constructor (group) {
    this.i = 0
    this.group = group
  }

  next () {
    if (this.i === this.group.group.length) {
      return { done: true }
    }
    let value = this.group.group[this.i]
    this.i++
    return { value }
  }
}

IterGroup.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this)
}

module.exports = {
  IterGroup: IterGroup
}
