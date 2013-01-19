var should = require('should');
var loader = require('../index');

runTests();
function runTests() {
  var result = loader();
  if (!result) {
    throw new Error('failed to load jquery from default url');
  }
  should.exist($, 'jquery "$" is not defined after loading jquery script from default url');
  var testString = '   foo bar  ';
  var cleanString = $.trim(testString);
  cleanString.should.eql('foo bar');
  iimDisplay('Success! load jquery test suite passes');
}