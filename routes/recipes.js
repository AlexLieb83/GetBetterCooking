const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Story = require("../models/Story");

//@desc   Show add page
//@route  GET /recipes/add
router.get("/add", ensureAuth, (req, res) => {
  res.render("recipes/add");
});

module.exports = router;
