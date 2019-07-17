const { describe, it } = require('mocha')
const { expect } = require('chai')
const fs = require('fs')
const { triangle } = require('../chapter2/looping_a_triangle')
const { fizzbuzz } = require('../chapter2/fizzbuzz')
const { chessboard } = require('../chapter2/chessboard')

describe('looping a triangle', function () {
  it('triangle(0)', function () {
    expect(triangle(0)).to.deep.equal([])
  })
  it('triangle(3)', function () {
    let expected = fs.readFileSync('./test/chapter2/triangle_3.txt').toString().split('\n')
    expect(triangle(3)).to.deep.equal(expected)
  })
  it('triangle(7)', function () {
    let expected = fs.readFileSync('./test/chapter2/triangle_7.txt').toString().split('\n')
    expect(triangle(7)).to.deep.equal(expected)
  })
})

describe('fizzbuzz', function () {
  it('fizzBuzz(0)', function () {
    expect(fizzbuzz(0)).to.deep.equal([])
  })
  it('fizzBuzz(5)', function () {
    let expected = fs.readFileSync('./test/chapter2/fizzbuzz_5.txt').toString().split('\n')
    expect(fizzbuzz(5)).to.deep.equal(expected)
  })
  it('fizzBuzz(100)', function () {
    let expected = fs.readFileSync('./test/chapter2/fizzbuzz_100.txt').toString().split('\n')
    expect(fizzbuzz(100)).to.deep.equal(expected)
  })
})

describe('chessboard', function () {
  it('chessboard(0)', function () {
    expect(chessboard(0)).to.deep.equal([])
  })
  it('chessboard(8)', function () {
    let expected = fs.readFileSync('./test/chapter2/chessboard_8.txt').toString().split('\n')
    expect(chessboard(8)).to.deep.equal(expected)
  })
  it('chessboard(16)', function () {
    let expected = fs.readFileSync('./test/chapter2/chessboard_16.txt').toString().split('\n')
    expect(chessboard(16)).to.deep.equal(expected)
  })
})
