const express = require("express");
const assert = require("assert");
const router = express.Router();
const User = require("../models/users");

//
// Register new user
//
router.post("/register", function(req, res, next) {
  try {
    // Validate with assert is string etc ..
    assert(typeof req.body.email === "string", "Email is not a string!");
    assert(typeof req.body.password === "string", "Password is not a string!");
    assert(typeof req.body.username === "string", "username is not a string!");

    // Create new user object
    const user = new User(req.body.email, req.password, req.body.username);
    res.status(200).json({ status: "ok" });
  } catch (ex) {
    next(ex);
  }
});

//
// Login with username / password
//
router.post("/login", function(req, res, next) {
  try {
    // Validate with assert is string etc ..
    assert(typeof req.body.password === "string", "Password is not a string!");
    assert(typeof req.body.username === "string", "username is not a string!");

    res.status(200).json({ status: "ok" });
  } catch (ex) {
    next(ex);
  }
});

// Fall back, display some info
router.all("*", function(req, res) {
  res.status(200);
  res.json({
    description: "Movie API version 2"
  });
});

module.exports = router;
