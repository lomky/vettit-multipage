var assert = require('assert');
var app = require('../server.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('#', function() {
  	it('should do something?', function() {
  		assert.equal('1', app.get('/'));
  	});
  });
});

