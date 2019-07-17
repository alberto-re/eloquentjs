const { describe, it } = require('mocha')
const { expect } = require('chai')
const { range, sum } = require('../chapter4/the_sum_of_a_range')
const { reverseArray, reverseArrayInPlace } = require('../chapter4/reversing_an_array')
const { arrayToList, arrayToListRecursive, listToArray, prepend, nth } = require('../chapter4/a_list')
const { deepEqual } = require('../chapter4/deep_comparison')

describe('range', function () {
  it('range(1, 10)', function () {
    expect(range(1, 10)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('range(5, 2, -1)', function () {
    expect(range(5, 2, -1)).to.deep.equal([5, 4, 3, 2])
  })
  it('sum(range(1, 10))', function () {
    expect(sum(range(1, 10))).to.equal(55)
  })
})

describe('reverse an array', function () {
  it('reverseArray(["A", "B", "C"])', function () {
    expect(reverseArray(['A', 'B', 'C'])).to.deep.equal(['C', 'B', 'A'])
  })
  it('reverseArrayInPlace([1, 2, 3, 4, 5])', function () {
    let arrayValue = [1, 2, 3, 4, 5]
    reverseArrayInPlace(arrayValue)
    expect(arrayValue).to.deep.equal([5, 4, 3, 2, 1])
  })
})

describe('a list', function () {
  it('arrayToList([10, 20])', function () {
    expect(arrayToList([10, 20])).to.deep.equal({ value: 10, rest: { value: 20, rest: null } })
  })
  it('arrayToListRecursive([10, 20])', function () {
    expect(arrayToListRecursive([10, 20])).to.deep.equal({ value: 10, rest: { value: 20, rest: null } })
  })
  it('listToArray(arrayToList([10, 20, 30]))', function () {
    expect(listToArray(arrayToList([10, 20, 30]))).to.deep.equal([10, 20, 30])
  })
  it('prepend(10, prepend(20, null))', function () {
    expect(prepend(10, prepend(20, null))).to.deep.equal({ value: 10, rest: { value: 20, rest: null } })
  })
  it('nth(arrayToList([10, 20, 30]), 1)', function () {
    expect(nth(arrayToList([10, 20, 30]), 1)).to.equal(20)
  })
})

describe('deep comparison', function () {
  let obj = { here: { is: 'an' }, object: 2 }
  it('deepEqual(obj, obj)', function () {
    expect(deepEqual(obj, obj)).to.be.true
  })
  it('deepEqual(obj, {here: 1, object: 2})', function () {
    expect(deepEqual(obj, {here: 1, object: 2})).to.be.false
  })
  it('deepEqual(obj, {here: {is: "an"}, object: 2})', function () {
    expect(deepEqual(obj, {here: {is: "an"}, object: 2})).to.be.true
  })
})
