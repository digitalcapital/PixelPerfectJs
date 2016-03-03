module.exports = {
    options: {
        sourceMap: false
    },
    dev: {
        files: {
            'dist/css/dcpixelperfect.css': 'src/scss/dcpixelperfect.scss'
        }
    },
    dist: {
        options: {
            'outputStyle': 'compressed'
        },
        files: {
            'dist/css/dcpixelperfect.min.css': 'src/scss/dcpixelperfect.scss'
        }
    }
}