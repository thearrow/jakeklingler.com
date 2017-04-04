var gulp = require('gulp')
var gutil = require('gulp-util')
var sass = require('gulp-sass')
const babel = require('gulp-babel')
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css')
var exec = require('child_process').exec
var del = require('del')
var shell = require('gulp-shell')
var htmlmin = require('gulp-htmlmin')

const paths = {
  styles: 'src/styles/**/*.scss',
  scripts: 'src/scripts/**/*.js',
  images: 'src/images/**/*',
  favicons: 'src/favicons/*',
}

gulp.task('default', ['clean', 'src', 'watch', 'hugo'])
gulp.task('build', ['clean', 'src', 'hugo:build', 'minify-html'])
gulp.task('src', ['styles', 'scripts', 'images', 'favicons'])
gulp.task('clean', () => del(['static/**/*', 'public/**/*']))

gulp.task('watch', ['src'], () => {
    gulp.watch(Object.keys(paths).map((key) => paths[key]), ['src'])                                         
})

gulp.task('hugo', ['src'], shell.task('hugo server'))

gulp.task('hugo:build', ['src'], shell.task('hugo'))

gulp.task('styles', ['clean'], () => gulp.src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleancss({advanced:true}))
    .pipe(gulp.dest('static/styles'))
)

gulp.task('scripts', ['clean'], () => gulp.src(paths.scripts)
    .pipe(babel())
    .pipe(gulp.dest('static/scripts'))
)

gulp.task('images', ['clean'], () => gulp.src(paths.images)
    .pipe(gulp.dest('static/images'))
)

gulp.task('favicons', ['clean'], () => gulp.src(paths.favicons)
    .pipe(gulp.dest('static'))
)

gulp.task('minify-html', ['hugo:build'], () => gulp.src('public/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true,
    }))
    .pipe(gulp.dest('public'))
)