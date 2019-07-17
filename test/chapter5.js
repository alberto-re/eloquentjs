const { describe, it } = require('mocha')
const { expect } = require('chai')
const { flatten } = require('../chapter5/flattening')
const { loop } = require('../chapter5/your_own_loop')
const { every, everySome } = require('../chapter5/everything')

describe('flattening', function () {
  it('flatten([[1, 2, 3], [4, 5], [6]])', function () {
    expect(flatten([[1, 2, 3], [4, 5], [6]])).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
})

describe('your_own_loop', function () {
  it('loop(3, n => n > 0, n => n - 1, counter++)', function () {
    let counter = 0
    loop(3, n => n > 0, n => n - 1, () => counter++)
    expect(counter).to.equal(3)
  })
})

describe('everything', function () {
  it('every([1, 3, 5], n => n < 10)', function () {
    expect(every([1, 3, 5], n => n < 10)).to.be.true
  })
  it('every([2, 4, 16], n => n < 10)', function () {
    expect(every([2, 4, 16], n => n < 10)).to.be.false
  })
  it('every([], n => n < 10)', function () {
    expect(every([], n => n < 10)).to.be.true
  })
})