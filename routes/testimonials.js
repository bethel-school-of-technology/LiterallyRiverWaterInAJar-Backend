var express = require("express");
var router = express.Router();
var models = require("../models");

// render createTestimonial.js react screen
router.get("/about", function (req, res, next) {
  models.posts.findAll().then((posts) => {
    res.json(posts);
  });
});

// create new testimonial
router.post("/about", function (req, res, next) {
  models.posts.create(req.body).then(() => {
    res.json({});
  });
});

// render editTestimonial.
// router.get("", function (req, res, next) {});

// //  edit testimonial as user
// router.put("", function (req, res, next) {});

// //  delete testimonial as user
// router.post("", function (req, res, next) {});

// //  delete testimonial as admin
// router.post("", function (req, res, next) {});

module.exports = router;
