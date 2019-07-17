const { describe, it } = require('mocha')
const { expect } = require('chai')
const { wrapPrimitiveMultiply } = require('../chapter8/retry')
const { box, withBoxUnlocked } = require('../chapter8/the_locked_box')

describe('retry', function () {
  it('wrapPrimitiveMultiply(8, 8)', function () {
    expect(wrapPrimitiveMultiply(8, 8)).to.equal(64)
  })
})

describe('the locked box', function () {
  it('withBoxUnlocked', function () {
    let errorRaised = false
    withBoxUnlocked(function () {
      box.content.push('gold piece')
    })
    try {
      withBoxUnlocked(function () {
        throw new Error('Pirates on the horizon! Abort!')
      })
    } catch (e) {
      errorRaised = true
    }
    expect(box.locked).to.be.true
    expect(errorRaised).to.be.true
  })
})
