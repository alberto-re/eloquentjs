const { describe, it } = require('mocha')
const { expect } = require('chai')
const rewire = require('rewire')
const eggLang = rewire('../chapter12/12_language')
const { skipSpace } = require('../chapter12/comments')
const { array, length, element } = require('../chapter12/arrays')
const { set } = require('../chapter12/fixing_scope')

describe('arrays', function () {
  eggLang.topScope.array = array
  eggLang.topScope.length = length
  eggLang.topScope.element = element
  it('run program using arrays', function () {
    const result = eggLang.run(`
      do(define(sum, fun(array,
          do(define(i, 0),
              define(sum, 0),
              while(<(i, length(array)),
                do(define(sum, +(sum, element(array, i))),
                  define(i, +(i, 1)))),
              sum))),
        sum(array(1, 2, 3)))
    `)
    expect(result).to.equal(6)
  })
})

describe('comments', function () {
  eggLang.__set__('skipSpace', skipSpace)
  it('parse program with comments', function () {
    const ast = eggLang.parse('# hello\nx')
    expect(ast).to.deep.equal({ type: 'word', name: 'x' })
  })
  it('parse program with comments (multiline)', function () {
    const ast = eggLang.parse('a # one\n   # two\n()')
    expect(ast).to.deep.equal({ type: 'apply', operator: { type: 'word', name: 'a' }, args: [] })
  })
})

describe('fixing scope', function () {
  eggLang.specialForms.set = set
  it('run a program using set instruction', function () {
    const result = eggLang.run(`
      do(define(x, 4),
        define(setx, fun(val, set(x, val))),
        setx(50))
    `)
    expect(result).to.equal(50)
  })
})
