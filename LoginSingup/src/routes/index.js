const express = require('express');
const rootRouter = express.Router();
const user = require("../routes/users.route");
const post = require("../routes/user.Post")

rootRouter.use('/user', user)
rootRouter.use('/post', post)



 module.exports = rootRouter;