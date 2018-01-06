/**
 * the main router
 *
 * Created by Clovin on 04/01/2018.
 */
let express = require('express')
let router = express.Router()
const path = require('path')

router.get(`/not-support`, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/not-support/not-support.html'))
})

module.exports = router