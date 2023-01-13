const express = require('express')
const router = express.Router();
const app = express()

const postsRoutes = require('./postsRoutes')
const indexController = require('../controllers/indexController')

app.get("/", indexController.show);
app.use('/posts', postsRoutes)

module.exports = app