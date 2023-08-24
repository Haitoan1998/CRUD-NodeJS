const CRUDServices = require("../services/CRUDServices");

class homeControllers {
  getHome = async (req, res, next) => {
    let listCourses = await CRUDServices.getListCourses();
    res.render("home.ejs", { listCourses: listCourses });
  };

  detailCourse = async (req, res, next) => {
    let id = req.params.id;
    let course = await CRUDServices.getCourse(id);
    let results = course && course.length > 0 ? course[0] : [];
    res.render("detailCourse.ejs", { course: results });
  };

  formCreateCourse = (req, res, next) => {
    res.render("formCreateCourse.ejs");
  };

  createCourse = async (req, res, next) => {
    let { name, description, image, videoID } = req.body;
    await CRUDServices.createCourse(name, description, image, videoID);
    res.redirect("/");
  };
}
module.exports = new homeControllers();
