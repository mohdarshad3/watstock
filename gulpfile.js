var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var jade=require('gulp-jade');
var browesrSyn=require('browser-sync');
var reload=browesrSyn.reload;
var SourcePath={
	sassSource:'src/scss/*.scss',
	jsSource:'src/js/*.js',
	jadeSource:'src/pages/*.jade',
	lessSource:'src/less/*.less'
}
var AppPath={
	root:'app/',
	style:'app/css',
	script:'app/js'
}
gulp.task('build-script',function(){
	return gulp.src(SourcePath.jsSource)
			.pipe(gulp.dest(AppPath.script));
});
gulp.task('build-less',function(){
	return gulp.src(SourcePath.lessSource)
			.pipe(less())
			.pipe(gulp.dest(AppPath.style));
});
gulp.task('build-jade',function(){
	return gulp.src(SourcePath.jadeSource)
			.pipe(jade())
			.pipe(gulp.dest(AppPath.root));
});
gulp.task('serve',['build-less','build-jade','build-script'],function(){
	browesrSyn.init([AppPath.style + '/*.css', AppPath.root + '/*.html', AppPath.script + '/*.js'],{
		server:{
			baseDir:AppPath.root
		}
	});
});
gulp.task('default',['serve']);