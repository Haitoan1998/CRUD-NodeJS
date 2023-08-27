const express = require("express");
const router = express.Router();
const homeControllers = require("../controllers/homeCotrollers");

router.get("/", homeControllers.getHome);

router.get("/detail-course/:slug", homeControllers.detailCourse);

router.get("/create-course", homeControllers.formCreateCourse);

router.post("/create-courses/sucsess", homeControllers.createCourse);

router.get("/list-courses", homeControllers.listCourses);

router.get("/delete-course/:slug", homeControllers.formDeleteCourse);

router.post(
  "/delete-soft-course-confirm/:slug",
  homeControllers.confirmDeleteCourse
);

router.get("/edit-course/:slug", homeControllers.formEditCourse);
router.post("/edit-course/sucsess/:slug", homeControllers.editCourse);

router.get("/bin", homeControllers.binCourse);
router.get("/restore-Course/:slug", homeControllers.restoreCourse);

router.get(
  "/permanently-delete-course/:slug",
  homeControllers.permanentlyDeleteCourse
); //
module.exports = router;
