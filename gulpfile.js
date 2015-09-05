var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber    = require('gulp-plumber');
var del        = require('del');
var pkg        = require('./package.json');
var webpack    = require('gulp-webpack-build');
var livereload = require('gulp-livereload');
var debug      = require('gulp-debug');
var path       = require('path');
var eslint     = require('gulp-eslint');
var run        = require('gulp-run');
//var rev        = require('gulp-rev');

gulp.task('css', ['clean'], function () {
  return gulp.src(pkg.paths.source.css)
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(pkg.paths.dest.css))
    .pipe(livereload());
});

gulp.task('clean', function (cb) {
  del([
    pkg.paths.dest.css,
    pkg.paths.dest.js
  ], cb);
});

// Run sequelize db migrations
gulp.task('db:migrate', function () {
  run('sequelize db:migrate').exec()
    .pipe(gulp.dest('output'));
});

gulp.task('watch', ['build'], function() {
    livereload.listen({
        host: 'localhost',
        port: 5000
    });
    gulp.watch(pkg.paths.source.css, ['css']);
    gulp.watch(pkg.paths.source.js).on('change', function(event) {
        if (event.type === 'changed') {
            gulp.src(webpack.config.CONFIG_FILENAME)
                .pipe(webpack.init(webpackConfig))
                .pipe(webpack.watch(function(err, stats) {
                    gulp.src(pkg.paths.source.js)
                        .pipe(webpack.proxy(err, stats))
                        .pipe(webpack.format({
                            verbose: true,
                            version: false
                        }))
                        .pipe(gulp.dest(pkg.paths.dest.js))
                        .pipe(livereload());
                }));
        }
    });
});

gulp.task('build', ['css', 'webpack', 'lint:server']);
gulp.task('default', ['build']);

var webpackConfig = {
    useMemoryFs: true
};

gulp.task('webpack', ['clean'], function() {
    return gulp.src(webpack.config.CONFIG_FILENAME)
        .pipe(webpack.init(webpackConfig))
        .pipe(webpack.run())
        .pipe(webpack.format({
            version: false,
            timings: true
        }))
        .pipe(webpack.failAfter({
            errors: true,
            warnings: true
        }))
        .pipe(gulp.dest(pkg.paths.dest.js));
});


gulp.task('lint:server', [], function() {
    return gulp.src(pkg.paths.source.serverJs)
        .pipe(eslint('eslint-server.json'))
        .pipe(eslint.format());
});
