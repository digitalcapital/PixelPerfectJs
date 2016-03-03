module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  var configs = require('load-grunt-configs')(grunt)
  grunt.initConfig(configs)

  grunt.registerTask('default', [
    'clean',
    'copy',
    'babel',
    'browserify',
    'uglify',
    'sass',
    'connect',
    'watch'
  ])

  grunt.registerTask('build', [
    'clean',
    'copy:scripts',
    'babel',
    'browserify',
    'uglify',
    'sass'
  ])
}
