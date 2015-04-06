var
  should = require('chai').should(),
  areacode = require('../.')
  ;

describe('byCode', function() {

  it('returns valid area code info from 415', function(){
    areacode.byCode('415').state_abbrv.should.equal('CA');
  });

  it('returns valid area code info from 212', function(){
    areacode.byCode('212').state_abbrv.should.equal('NY');
  });

});

describe('byNumber', function() {

  it('returns from (415) 123 - 5678', function(){
    areacode.byNumber('(415) 123 - 5678').state_abbrv.should.equal('CA');
  });

  it('returns from +14151235678', function(){
    areacode.byNumber('+14151235678').state_abbrv.should.equal('CA');
  });

  it('returns from 212.123.7654', function(){
    areacode.byNumber('212.123.7654').state_abbrv.should.equal('NY');
  });

});

describe('extractFromNumber', function() {

  it('extracts from (415) 123 - 5678', function(){
    areacode.extractFromNumber('(415) 123 - 5678').should.equal('415');
  });

  it('extracts from +14151235678', function(){
    areacode.extractFromNumber('+14151235678').should.equal('415');
  });

  it('extracts from 212.123.7654', function(){
    areacode.extractFromNumber('212.123.7654').should.equal('212');
  });

});