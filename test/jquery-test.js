var should = require('should');
var loader = require('../index');

function runTests() {
  var result = loader();
  if (!result) {
    throw new Error('failed to load jquery from default url');
  }
  should.exist($, 'jquery "$" is not defined after loading jquery script from default url');
}