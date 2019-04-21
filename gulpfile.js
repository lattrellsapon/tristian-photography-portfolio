const gulp = require("gulp");
const minifyImages = require("gulp-imagemin");
const minifyCSS = require("gulp-clean-css");
const minifyJS = require("gulp-uglify");

gulp.task("message", function() {
  return console.log("Gulp is running");
});

// Minify CSS
gulp.task("minify-css", () => {
  gulp
    .src("src/css/*.css")
    .pipe(minifyCSS())
    .pipe(gulp.dest("./public/css"));
});

// Minify JS
gulp.task("minify-js", () => {
  gulp
    .src("src/js/*js")
    .pipe(minifyJS())
    .pipe(gulp.dest("./public/js"));
});

// Minify Images
gulp.task("minify-images", () => {
  gulp
    .src("src/images/*")
    .pipe(minifyImages())
    .pipe(gulp.dest("./public/images"));
});
