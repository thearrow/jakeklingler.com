var gulp = require('gulp')
var gutil = require('gulp-util')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css')
var exec = require('child_process').exec

const paths = {
  styles: 'src/styles/**/*.scss',
  scripts: 'src/scripts/**/*.js',
}

gulp.task('default', ['watch', 'styles', 'scripts', 'hugo'])
gulp.task('build', ['styles', 'scripts', 'hugo:build'])

gulp.task('watch', () => {
    gulp.watch(paths.styles, ['styles'])    
})

gulp.task('hugo', () => {
    let hugo = exec('hugo server')
    hugo.stdout.on('data', (data) => {
        console.log(data)
    })
})

gulp.task('hugo:build', () => {
    let hugo = exec('hugo')
    hugo.stdout.on('data', (data) => {
        console.log(data)
    })
})

gulp.task('styles', () => {
    return gulp.src(paths.styles)
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleancss({advanced:true}))
        .pipe(gulp.dest('static/styles'))
})

gulp.task('scripts', () => {
    return
})