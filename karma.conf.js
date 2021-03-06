// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/data-structures/distribution/browser/data-structures-1.4.1.js',
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/mathjs/dist/math.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-coordinate/angular-coordinate.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angulartics/src/angulartics.js',
      'app/bower_components/angulartics/src/angulartics-google-analytics.js',
      'app/scripts/app.js',
      '.tmp/scripts/app.js',
      'app/scripts/services/models/*.js',
      '.tmp/scripts/services/models/*.js',
      'app/scripts/**/*.js',
      '.tmp/scripts/**/*.js',
      'test/mock/**/*.js',
      '.tmp/spec/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
