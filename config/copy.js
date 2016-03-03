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
    }
}
