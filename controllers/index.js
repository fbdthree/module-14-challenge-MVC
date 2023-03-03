const router = require("express").Router()
const homeRoutes = require("./homeRoutes")
const api = require('./api')

// 'http:/localhost:3001/'
router.use("/", homeRoutes)
// 'http:/localhost:3001/api'
router.use('/api', api)

module.exports = router