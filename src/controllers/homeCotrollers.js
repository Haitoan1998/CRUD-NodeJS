const CRUDServices = require("../services/CRUDServices");

class homeControllers {
  getHome = async (req, res, next) => {
    const path = req.path;
    let listCourses = await CRUDServices.getListCourses(path);
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("home.ejs", {
      listCourses: listCourses,
      listCourseDelete: listCourseDelete,
    });
  };

  detailCourse = async (req, res, next) => {
    let slug = req.params.slug;
    let course = await CRUDServices.getCourse(slug);
    let results = course && course.length > 0 ? course[0] : [];
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("detailCourse.ejs", {
      course: results,
      listCourseDelete: listCourseDelete,
    });
  };

  formCreateCourse = async (req, res, next) => {
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("formCreateCourse.ejs", { listCourseDelete: listCourseDelete });
  };

  createCourse = async (req, res, next) => {
    let { name, description, image, videoID } = req.body;
    await CRUDServices.createCourse(name, description, image, videoID);
    res.redirect("/");
  };

  listCourses = async (req, res, next) => {
    let path = req.path;
    let listCourses = await CRUDServices.getListCourses(path);
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("listCourses.ejs", {
      listCourses: listCourses,
      listCourseDelete: listCourseDelete,
    });
  };

  formDeleteCourse = async (req, res, next) => {
    let slug = req.params.slug;
    let course = await CRUDServices.getCourse(slug);
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("formDeleteCourse.ejs", {
      course: course[0],
      listCourseDelete: listCourseDelete,
    });
  };

  confirmDeleteCourse = async (req, res, next) => {
    let slug = req.params.slug;
    await CRUDServices.deleteSoftCourse(slug);
    res.redirect("/list-courses");
  };

  formEditCourse = async (req, res, next) => {
    let slug = req.params.slug;
    let course = await CRUDServices.getCourse(slug);
    let listCourseDelete = await CRUDServices.getCoursesDeleteSoft();
    res.render("formEditCourse", {
      course: course[0],
      listCourseDelete: listCourseDelete,
    });
  };

  editCourse = async (req, res, next) => {
    let slug = req.params.slug;
    let { name, description, image, videoID } = req.body;
    console.log(name, description, image);
    await CRUDServices.editCourse(name, description, image, videoID, slug);
    res.redirect("/");
  };
  binCourse = async (req, res, next) => {
    let path = req.path;
    let listCourses = await CRUDServices.getListCourses(path);
    res.render("bin.ejs", { listCourses: listCourses });
  };

  restoreCourse = async (req, res) => {
    let slug = req.params.slug;
    await CRUDServices.restoreCourse(slug);
    res.redirect("/Bin");
  };

  permanentlyDeleteCourse = async (req, res) => {
    let slug = req.params.slug;
    await CRUDServices.permanentlyDeleteCourse(slug);
    res.redirect("back");
  };
}
module.exports = new homeControllers();
