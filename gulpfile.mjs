import GulpClient from "gulp";
const gulp = GulpClient;

export async function minifyImages() {
  const imagemin = await import("gulp-imagemin");

  return gulp
    .src("public/**/*.{png,jpg,jpeg,webp,gif,svg}")
    .pipe(imagemin.default())
    .pipe(gulp.dest("public/minified"));
}

gulp.task("minifyImages", minifyImages);
export default gulp.series("minifyImages");
