const { describe, it } = require('mocha')
const { expect } = require('chai')
const { regexp } = require('../chapter9/regexp_golf')
const { replaceQuotes } = require('../chapter9/quoting_style')
const { numberRe } = require('../chapter9/numbers_again')

describe('regexp_golf', function () {
  const testCases = [
    [
      ['my car', 'bad cats'],
      ['camper', 'high art']
    ],
    [
      ['pop culture', 'mad props'],
      ['plop', 'prrrop']
    ],
    [
      ['ferret', 'ferry', 'ferrari'],
      ['ferrum', 'transfer A']
    ],
    [
      ['how delicious', 'spacious room'],
      ['ruinous', 'consciousness']
    ],
    [
      ['bad punctuation .'],
      ['escape the dot']
    ],
    [
      ['hottentottententen'],
      ['no', 'hotten totten tenten']
    ],
    [
      ['red platypus', 'wobbling nest'],
      ['earth bed', 'learning ape', 'BEET']
    ]
  ]

  for (let i = 0; i < testCases.length; i++) {
    for (const tc of testCases[i][0]) {
      it(`${regexp[i]} matches '${tc}'`, function () {
        expect(regexp[i].test(tc)).to.be.true
      })
    }
    for (const tc of testCases[i][1]) {
      it(`${regexp[i]} doesn't match '${tc}'`, function () {
        expect(regexp[i].test(tc)).to.be.false
      })
    }
  }
})

describe('quoting style', function () {
  it('replace \' with "', function () {
    let text = "'I'm the cook,' he said, 'it's my job.'"
    expect(replaceQuotes(text)).to.equal('"I\'m the cook," he said, "it\'s my job."')
  })
})

describe('numbers again', function () {
  for (let str of ['1', '-1', '+15', '1.55', '.5', '5.', '1.3e2', '1E-4', '1e+12']) {
    it(`${numberRe} matches '${str}'`, function () {
      expect(numberRe.test(str)).to.be.true
    })
  }
  for (let str of ['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.']) {
    it(`${numberRe} doesn't match '${str}'`, function () {
      expect(numberRe.test(str)).to.be.false
    })
  }
})
