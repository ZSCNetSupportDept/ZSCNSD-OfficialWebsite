/**
 * annual page router
 *
 * Created by Clovin on 04/01/2018.
 */

let express = require('express')
let router = express.Router()
const path = require('path')

router.get('/annual2016', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/annual2016/annual2016.html'))
})

router.get('/annual2017', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/annual2017/annual2017.html'))
})

module.exports = router