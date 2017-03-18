var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');

//Javascript
gulp.task('minify-js', function (cb) {//task é uma tarefa, estamos criando uma tarefa
  pump([
        gulp.src('js/*.js'),//caminho do arquivo que queremos fazer a tarefa
        uglify(),//deixa o js feito, ex.: tira os nomes de nossas variaveis e coloca tudo como 'a' por exemplo, para assim o navegador renderizar mais rapido
        gulp.dest('../js')//locar de destino do arquivo
    ],
    cb
  );
});

//CSS
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../css'));
});

//IMG
gulp.task('minify-img-jpg', function() {
    gulp.src('img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('../img'));
});

gulp.task('minify-img-png', function() {
    return gulp.src('img/*.png')
		.pipe(optipng({ optimizationLevel: 3 })())
		.pipe(gulp.dest('../img'));
});

gulp.task('default', function () {
    //CSS 
    gulp.watch('css/*.css', ['minify-css']);
    //JS
    gulp.watch('js/*.js', ['minify-js']);
    //IMG
    gulp.watch('img/*.jpg', ['minify-img-jpg']);
});