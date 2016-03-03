module.exports = {
    image: {
        expand: true,
        cwd: 'src',
        src: 'img/**/*',
        dest: 'dist/'
    },
    html: {
        expand: true,
        cwd: 'src',
        src: '**/*.html',
        dest: 'dist/'
    },
    scripts: {
        expand: true,
        cwd: 'src',
        src: 'scripts/**/*.js',
        dest: '.tmp/'
    }
}
