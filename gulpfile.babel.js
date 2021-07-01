var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel')
var autoprefixer = require('gulp-autoprefixer')
var cleancss = require('gulp-clean-css')
var del = require('del')
var shell = require('gulp-shell')
var htmlmin = require('gulp-htmlmin')

const paths = {
  styles: 'src/styles/**/*.scss',
  scripts: 'src/scripts/**/*.js',
  images: 'src/images/**/*',
  favicons: 'src/favicons/*',
}

const clean = () => del(['static/**/*', 'public/**/*'])

const styles = () => gulp.src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleancss({advanced:true}))
    .pipe(gulp.dest('static/styles'))

const scripts = () => gulp.src(paths.scripts)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('static/scripts'))

const images = () => gulp.src(paths.images)
    .pipe(gulp.dest('static/images'))

const favicons = () => gulp.src(paths.favicons)
    .pipe(gulp.dest('static'))

const src = gulp.series(clean, gulp.parallel(styles, scripts, images, favicons))
const hugo = gulp.series(src, shell.task('hugo server'))
const hugoBuild = gulp.series(src, shell.task('hugo'))
const watch = () => gulp.watch(Object.keys(paths).map((key) => paths[key]), src)                                         

const minifyHtml = () => gulp.src('public/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true,
    }))
    .pipe(gulp.dest('public'))

const build = gulp.series(src, hugoBuild, minifyHtml)
exports.build = build

const defaultTask = gulp.series(src, gulp.parallel(watch, hugo))
exports.default = defaultTask