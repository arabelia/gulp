var gulp = require('gulp');
var gulpsass= require('gulp-sass');
var gulpjade= require('gulp-jade');

gulp.task('saludar',function(){
	console.log('Hola, ya me pongo a trabajar.');
});

gulp.task('compilar_sass',function(){
	return gulp.src('./sass/main.scss')
	.pipe(gulpsass())
	.pipe(gulp.dest('./css'));
});

gulp.task('compilar_jade',function(){
	return gulp.src('./jade/index.jade')
	.pipe(gulpjade())
	.pipe(gulp.dest('./public'));
});

gulp.task('vigilar', function(){
	return gulp.watch('./sass/main.scss', ['compilar_sass']);
});

gulp.task('vigilar', function(){
	return gulp.watch('./jade/index.jade', ['compilar_jade']);
});

gulp.task('default', ['saludar','compilar_sass', 'compilar_jade']);