const { describe, it } = require('mocha')
const { expect } = require('chai')
const { min } = require('../chapter3/minimum')
const { isEven } = require('../chapter3/recursion')
const { countBs, countChar } = require('../chapter3/bean_counting')

describe('minimum', function () {
  it('min(0, 10)', function () {
    expect(min(0, 10)).to.equal(0)
  })
  it('min(0, -10)', function () {
    expect(min(0, -10)).to.equal(-10)
  })
})

describe('recursion', function () {
  it('isEven(50)', function () {
    expect(isEven(50)).to.be.true
  })
  it('isEven(75)', function () {
    expect(isEven(75)).to.be.false
  })
  it('isEven(-1)', function () {
    expect(isEven(-1)).to.be.false
  })
})

describe('bean_counting', function () {
  it('countBs("BBC")', function () {
    expect(countBs('BBC')).to.equal(2)
  })
  it('countChar("kakkerlak", "k")', function () {
    expect(countChar('kakkerlak', 'k')).to.equal(4)
  })
})
