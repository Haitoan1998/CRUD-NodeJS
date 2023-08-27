const connectDatabase = require("../config/connectDatabase");
const slugify = require("slugify");
const uniqueSlug = require("unique-slug");

class CRUDServices {
  getListCourses = async (path) => {
    let [results, fields] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE isDeleted = 0`
    );
    let [resultsBin, fieldsBin] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE isDeleted = 1`
    );
    let listCourses = path === "/Bin" ? resultsBin : results;
    return listCourses;
  };

  getCourse = async (slug) => {
    let [results, fields] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE slug= ?`,
      [slug]
    );
    return results;
  };

  getCourseCreate = async (id) => {
    let [results, fields] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE id= ${id};`
    );
    return results;
  };

  updateSlug = async (slug, id) => {
    const stringUniqueSlug = uniqueSlug();
    let [results, fields] = await connectDatabase.query(
      `UPDATE Courses SET slug='${slug}-${stringUniqueSlug}' WHERE id= ${id};`
    );
  };

  createCourse = async (name, description, image, video) => {
    let [results, fields] = await connectDatabase.query(
      `INSERT INTO Courses (name, description, image, videoID)
      VALUES (?, ?, ?, ?);`,
      [name, description, image, video]
    );
    const crudServices = new CRUDServices();
    const courses = await crudServices.getCourseCreate(results.insertId);
    const nameSlug =
      courses && courses.length > 0 ? courses[0].name : undefined;

    const slug = slugify(nameSlug, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true,
    });
    await crudServices.updateSlug(slug, results.insertId);
  };

  deleteSoftCourse = async (slug) => {
    let [results, fields] = await connectDatabase.query(
      `UPDATE Courses SET isDeleted = 1 WHERE slug= ?;`,
      [slug]
    );
  };

  editCourse = async (name, description, image, video, slug) => {
    let [results, fields] = await connectDatabase.query(
      `UPDATE Courses SET name = ?, description = ?, image = ?, videoID = ? WHERE slug = ?;`,
      [name, description, image, video, slug]
    );
  };

  getCoursesDeleteSoft = async () => {
    let [resultsBin, fieldsBin] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE isDeleted = 1`
    );
    return resultsBin;
  };
  restoreCourse = async (slug) => {
    let [results, fields] = await connectDatabase.query(
      `UPDATE Courses SET isDeleted = 0 WHERE slug= ?;`,
      [slug]
    );
  };

  permanentlyDeleteCourse = async (slug) => {
    let [results, fields] = await connectDatabase.query(
      `DELETE FROM Courses WHERE slug= ?;`,
      [slug]
    );
  };
}

module.exports = new CRUDServices();
