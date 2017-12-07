var gulp = require('gulp');
var gutil = require('gulp-util');
var critical = require('critical').stream;
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

//critical css
gulp.task('critical', function () {
  return gulp.src('src/*.html')
        .pipe(critical({
          base: 'src/',
          inline: true,
          css: 'src/css/custom.css',
          minify: true,
          timeout: 120000,
          dimensions: [{
            width: 1300,
            height: 900
          },
          {
            width: 500,
            height: 900
          }]
        }))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message));
        })
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
    // critical.generate({
    //     inline: true,
    //     base: 'src/',
    //     src: '*.html',
    //     dest: 'dist/',
    //
    // });
});

//minimize html
gulp.task('html', function() {
  return gulp.src('src/*.html')    //所有要壓縮的 .html 檔案
    .pipe(htmlmin({collapseWhitespace: true}))    //去除檔案裡多餘的空格
    .pipe(gulp.dest('dist'))    //檔案輸出路徑
    .pipe(browserSync.stream());    // 瀏覽器同步
});

//clean css
gulp.task('style', function() {
  return gulp.src('src/css/*.css')    //所有要壓縮的 .css 檔案
    .pipe(cleanCSS({compatibility: 'ie8'}))    //將 css 最小化
    // .pipe(concat('style.min.css')) //將所有 css 合併成 style.min.css
    .pipe(gulp.dest('dist/css'))    //檔案輸出路徑
    .pipe(browserSync.stream());    // 瀏覽器同步
});

// uglify js
gulp.task('script', function () {
  return gulp.src('src/js/*.js')    //所有要壓縮的 .js 檔案
    // .pipe(uglify())    //將 JavaScript 最小化
    // .pipe(concat('main.min.js'))    //將所有 js 合併成 main.min.js
    .pipe(gulp.dest('dist/js'))    //檔案輸出路徑
    .pipe(browserSync.stream());    // 瀏覽器同步
});

//compress img
gulp.task('image', function() {
  return gulp.src('src/img/*/*')    //所有要壓縮的圖片檔案
    .pipe(imagemin())    // 圖片最小化
    .pipe(gulp.dest('dist/img/'));    //壓縮後檔案輸出位置
});

//browser sync
gulp.task('browsersync', function () {
  browserSync.init({
    server: "./dist" //要瀏覽器同步的資料夾
  });
});

gulp.task('watch', function(){
  gulp.watch('src/css/*.css', ['critical'])

  gulp.watch('src/*.html', ['html']) //監看所有 html 檔案，檔案有更動時就執行 task html
  gulp.watch('src/css/*.css', ['style'])  //監看所有 css 檔案，檔案有更動時就執行 task style
  gulp.watch('src/js/*.js', ['script']); //監看所有 js 檔案，檔案有更動時就執行 task script
  gulp.watch('app/pug/**/*.pug', ['pug']);
});

gulp.task('default', ['watch','browsersync','critical','html','style', 'script', 'image']);
