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

<<<<<<< HEAD
=======
//Javascript flexslider
gulp.task('minify-js-flexslider', function (cb) {//task é uma tarefa, estamos criando uma tarefa
  pump([
        gulp.src('banner/*.js'),//caminho do arquivo que queremos fazer a tarefa
        uglify(),//deixa o js feito, ex.: tira os nomes de nossas variaveis e coloca tudo como 'a' por exemplo, para assim o navegador renderizar mais rapido
        gulp.dest('../banner')//locar de destino do arquivo
    ],
    cb
  );
});

//CSS flexslider
gulp.task('minify-css-flexslider', function() {
  return gulp.src('banner/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../banner'));
});

//IMG
gulp.task('minify-img-jpg-flexslider', function() {
    gulp.src('banner/img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('../banner/img'));
});

gulp.task('minify-img-png-flexslider', function() {
    return gulp.src('banner/img/*.png')
        .pipe(optipng({ optimizationLevel: 3 })())
        .pipe(gulp.dest('../banner/img'));
});

>>>>>>> felipe_developer
gulp.task('default', function () {
    //CSS 
    gulp.watch('css/*.css', ['minify-css']);
    //JS
    gulp.watch('js/*.js', ['minify-js']);
    //IMG
    gulp.watch('img/*.jpg', ['minify-img-jpg']);
<<<<<<< HEAD
=======

    //CSS FlexSlider
    gulp.watch('banner/*.css', ['minify-css-flexslider']);
    //JS FlexSlider
    gulp.watch('banner/*.js', ['minify-js-flexslider']);
    //IMG FlexSlider
    gulp.watch('banner/img/*.jpg', ['minify-img-jpg-flexslider']);
    gulp.watch('banner/img/*.png', ['minify-img-png-flexslider']);
>>>>>>> felipe_developer
});