var gulp = require('gulp')
var gutil = require('gulp-util')
var sass = require('gulp-sass')
const babel = require('gulp-babel')
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css')
var exec = require('child_process').exec
var del = require('del')

const paths = {
  styles: 'src/styles/**/*.scss',
  scripts: 'src/scripts/**/*.js',
  images: 'src/images/**/*',
  favicons: 'src/favicons/*',
}

gulp.task('default', ['clean', 'src', 'watch', 'hugo'])
gulp.task('build', ['clean', 'src', 'hugo:build'])
gulp.task('src', ['styles', 'scripts', 'images', 'favicons'])
gulp.task('clean', () => del(['static/**/*', 'public/**/*']))

gulp.task('watch', () => {
    gulp.watch(Object.keys(paths).map((key) => paths[key]), ['src'])                                         
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

gulp.task('styles', () => gulp.src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleancss({advanced:true}))
    .pipe(gulp.dest('static/styles'))
)

gulp.task('scripts', () => gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest('static/scripts'))
)

gulp.task('images', () => gulp.src(paths.images)
    .pipe(gulp.dest('static/images'))
)

gulp.task('favicons', () => gulp.src(paths.favicons)
    .pipe(gulp.dest('static'))
)