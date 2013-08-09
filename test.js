var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    soundex = require('./index.js')


describe('Encoding with default', function(){

  it('encode single strings', function(){

    expect(soundex('Washington')).to.equal('W252')
    expect(soundex('Wu')).to.equal('W000')
    expect(soundex('DeSmet')).to.equal('D253')
    expect(soundex('Gutierrez')).to.equal('G362')
    expect(soundex('Pfister')).to.equal('P236')
    expect(soundex('Jackson')).to.equal('J250')
    expect(soundex('Tymczak')).to.equal('T522')
    expect(soundex('Ashcraft')).to.equal('A261')
    expect(soundex('Euler')).to.equal('E460')
    expect(soundex('Gauss')).to.equal('G200')
    expect(soundex('Hilbert')).to.equal('H416')
    expect(soundex('Knuth')).to.equal('K530')
    expect(soundex('Lloyd')).to.equal('L300')
    expect(soundex('Lukasiewicz')).to.equal('L222')
    expect(soundex('Battlestar')).to.equal('B342')

  })

})

// These strings are compared to the ones I generated from SELECT SOUNDEX(str); in MySQL 5.6.12
describe('Encoding with mysql', function(){

  it('encode single strings', function(){

    expect(soundex('Washington', true)).to.equal('W25235')
    expect(soundex('Wu', true)).to.equal('W000')
    expect(soundex('DeSmet', true)).to.equal('D253')
    expect(soundex('Gutierrez', true)).to.equal('G362')
    expect(soundex('Pfister', true)).to.equal('P236')
    expect(soundex('Jackson', true)).to.equal('J500')
    expect(soundex('Tymczak', true)).to.equal('T520')
    expect(soundex('Ashcraft', true)).to.equal('A2613')
    expect(soundex('Battlestar', true)).to.equal('B34236')

  })

})