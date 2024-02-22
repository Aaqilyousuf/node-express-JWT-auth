const express = require("express");
const {
  getAllUser,
  Register,
  Login,
  getQuote,
  postQuote,
} = require("../controllers/user-controller");

const router = express.Router();

router.get("/", getAllUser);
router.post("/register", Register);
router.post("/login", Login);
// router.get("/quote", getQuote);
// router.post("/quote", postQuote);

module.exports = router;
