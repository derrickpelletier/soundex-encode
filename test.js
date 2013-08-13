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

describe('Encoding with default', function(){

  it('encode single strings', function(){
    var opts = {
        zeroed: false
    }
    expect(soundex('Wu', opts)).to.equal('W')
    expect(soundex('Jackson', opts)).to.equal('J25')
    expect(soundex('Euler', opts)).to.equal('E46')
    expect(soundex('Gauss', opts)).to.equal('G2')
    expect(soundex('Knuth', opts)).to.equal('K53')
    expect(soundex('Lloyd', opts)).to.equal('L3')
  })

})

// These strings are compared to the ones I generated from SELECT SOUNDEX(str); in MySQL 5.6.12
describe('Encoding with mysql', function(){

  it('encode single strings', function(){
    var opts = {
        mysql: true
    }
    expect(soundex('Washington', opts)).to.equal('W25235')
    expect(soundex('Wu', opts)).to.equal('W000')
    expect(soundex('DeSmet', opts)).to.equal('D253')
    expect(soundex('Gutierrez', opts)).to.equal('G362')
    expect(soundex('Pfister', opts)).to.equal('P236')
    expect(soundex('Jackson', opts)).to.equal('J500')
    expect(soundex('Tymczak', opts)).to.equal('T520')
    expect(soundex('Ashcraft', opts)).to.equal('A2613')
    expect(soundex('Battlestar', opts)).to.equal('B34236')

  })

})