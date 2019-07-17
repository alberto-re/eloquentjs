const { describe, it } = require('mocha')
const { expect } = require('chai')
const { bigOak } = require('../chapter11/crow-tech')
const { locateScalpel, locateScalpelNoAsyncAwait } = require('../chapter11/tracking_the_scalpel')
const { promiseAll } = require('../chapter11/building_promise_all')

describe('tracking the scalpel', function () {
  it('locateScalpel', function (done) {
    locateScalpel(bigOak).then(function (res) {
      expect(res).to.equal('Butcher Shop')
      done()
    })
  })
  it('locateScalpelNoAsyncAwait', function (done) {
    locateScalpelNoAsyncAwait(bigOak).then(function (res) {
      expect(res).to.equal('Butcher Shop')
      done()
    })
  })
})

describe('building promise all', function () {
  it('Promise_all([])', function (done) {
    promiseAll([]).then(res => {
      expect(res).to.deep.equal([])
      done()
    })
  })
  it('Promise_all([soon(1), soon(2), soon(3)])', function (done) {
    function soon (val) {
      return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500)
      })
    }
    promiseAll([soon(1), soon(2), soon(3)]).then(res => {
      expect(res).to.deep.equal([1, 2, 3])
      done()
    })
  })
})
