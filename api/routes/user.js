const express = require("express");
const router = express.Router();
const User = require("../models/user");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
