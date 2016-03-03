module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  var configs = require('load-grunt-configs')(grunt)
  grunt.initConfig(configs)

  grunt.registerTask('default', [
    'clean',
    'browserify',
    'babel',
    'uglify',
    'sass',
    'copy::css',
    'copy::scripts',
    'connect',
    'watch'
  ])

  grunt.registerTask('build', [
    'clean',
    'browserify',
    'babel',
    'uglify',
    'sass'
  ])
}
