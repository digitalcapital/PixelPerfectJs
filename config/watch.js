module.exports = {
  scripts: {
    files: ['src/scripts/**/*.js'],
    tasks: ['browserify', 'babel', 'uglify'],
    options: {
      spawn: false
    }
  },
  css: {
    files: ['src/scss/**/*.scss'],
    tasks: ['sass'],
    options: {
      spawn: false
    }
  },
  image: {
    files: ['src/img/**/*'],
    tasks: ['copy:image'],
    options: {
      spawn: false
    }
  },
  html: {
    files: ['src/**/*.html'],
    tasks: ['copy:html'],
    options: {
      spawn: false
    }
  }
};