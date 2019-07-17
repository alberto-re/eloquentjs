const { describe, it } = require('mocha')
const { expect } = require('chai')
const { Vec } = require('../chapter6/a_vector_type')
const { Group } = require('../chapter6/groups')
const { IterGroup } = require('../chapter6/iterable_groups')

describe('a vector type', function () {
  it('new Vec(1, 2).plus(new Vec(2, 3))', function () {
    expect(new Vec(1, 2).plus(new Vec(2, 3))).to.deep.equal(new Vec(3, 5))
  })
  it('new Vec(1, 2).minus(new Vec(2, 3))', function () {
    expect(new Vec(1, 2).minus(new Vec(2, 3))).to.deep.equal(new Vec(-1, -1))
  })
  it('new Vec(3, 4).length', function () {
    expect(new Vec(3, 4).length).to.equal(5)
  })
})

describe('groups', function () {
  let group = Group.from([10, 20]);
  it('group.has(10)', function () {
    expect(group.has(10)).to.be.true
  })
  it('group.has(30)', function () {
    expect(group.has(30)).to.be.false
  })
})

describe('iterable groups', function () {
  it('IterGroup.from(["a", "b", "c"])', function () {
    let elements = []
    for (let value of IterGroup.from(['a', 'b', 'c'])) {
      elements.push(value)
    }
    expect(elements).to.deep.equal(['a', 'b', 'c'])
  })
})
