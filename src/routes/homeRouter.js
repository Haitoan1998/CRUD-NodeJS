const express = require("express");
const router = express.Router();
const homeControllers = require("../controllers/homeCotrollers");

router.get("/", homeControllers.getHome);

router.get("/detail-course/:id", homeControllers.detailCourse);

router.get("/create-course", homeControllers.formCreateCourse);

router.post("/create-courses/sucsess", homeControllers.createCourse);

module.exports = router;
