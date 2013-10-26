// test typeof
var assert = require('assert'),
    math = require('../../../index')();

describe('typeof', function() {

  it('should return number type for a number', function() {
    assert.equal(math.typeof(2), 'number');
    assert.equal(math.typeof(new Number(2)), 'number');
  });

  it('should return string type for a string', function() {
    assert.equal(math.typeof('hello there'), 'string');
  });

  it('should return complex type for a complex number', function() {
    assert.equal(math.typeof(math.complex(2,3)), 'complex');
  });

  it('should return array type for an array', function() {  
    assert.equal(math.typeof([1,2,3]), 'array');
  });

  it('should return matrix type for a matrix', function() {  
    assert.equal(math.typeof(math.matrix()), 'matrix');
  });

  it('should return unit type for a unit', function() {  
    assert.equal(math.typeof(math.unit('5cm')), 'unit');
  });

  it('should return boolean type for a boolean', function() {  
    assert.equal(math.typeof(true), 'boolean');
    assert.equal(math.typeof(false), 'boolean');
  });

  it('should return null type for null', function() {  
    assert.equal(math.typeof(null), 'null');
  });

  it('should return undefined type for undefined', function() {  
    assert.equal(math.typeof(undefined), 'undefined');
  });

  it('should return date type for a Date', function() {  
    assert.equal(math.typeof(new Date()), 'date');
  });

  it('should return function type for a function', function() {  
    assert.equal(math.typeof(function () {}), 'function');
  });

  it('should return object type for an object', function() {  
    assert.equal(math.typeof({}), 'object');
  });

  it('should throw an error if called with a wrong number of arguments', function() {
    assert.throws(function() {math.typeof(); });
    assert.throws(function() {math.typeof(1,2); });
  });

});