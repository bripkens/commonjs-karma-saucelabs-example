module.exports = {
  logLevel: 'LOG_DEBUG',

  reporters: ['spec'],

  singleRun : true,
  autoWatch : false,

  frameworks: [
    'mocha',
    'browserify'
  ],

  files: [
    'test/*.js'
  ],

  preprocessors: {
    'test/*.js': ['browserify']
  },

  browserify: {
    debug: true
  }
}
