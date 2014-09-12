var _ = require('underscore');
var base = require('./base.karma.conf.js');

module.exports = function(config) {
  config.set(_.defaults({
    browsers: ['PhantomJS']
  }, base));
};
