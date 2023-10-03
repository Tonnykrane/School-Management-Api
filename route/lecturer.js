const express = require("express")
const router = express.Router
const lecturerController = require("../controller/lecturer")

router.post("/register", lecturerController.registerLecturer)
router.post("/login", adminController.loginLecturer)
 


module.exports = router;
