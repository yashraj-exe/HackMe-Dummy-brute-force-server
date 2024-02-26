const express = require("express");
const router  = express.Router();

const logicController = require("../controllers/controllers")

const authorization = require("../middleware/auth-middleware");

// Public Routes
router.post('/user/register',logicController.registerUser);
router.post('/user/login',logicController.loginUser);
router.get("/users/get_winners",logicController.getWinners);

// Protected Routes
router.get('/user/winner',authorization,logicController.winnerEntry);



module.exports = router;
  