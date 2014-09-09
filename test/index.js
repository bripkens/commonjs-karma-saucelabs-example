var root = require('../src');
var assert = require('assert');

describe('root module', function() {
  it('should welcome users with `Hello World`', function() {
    assert.equal(root.getWelcomeMessage(), 'Hello World');
  });
});
