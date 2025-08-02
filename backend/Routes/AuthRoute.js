const { Signup, Login, checkUser, Logout } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/checkUser", checkUser);
router.post("/logout", Logout);


module.exports = router;
