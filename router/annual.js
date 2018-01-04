/**
 * Created by Clovin on 04/01/2018.
 */

let express = require('express')
let router = express.Router()

router.get('/gallery', function (req, res) {
  res.send('About birds')
})

router.get('/gallery.html', function (req, res) {
  res.sendFile(dirname + '/public/html/gallery.html', function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
  })
})

router.get('/annual', function (req, res, next) {
  res.sendFile(dirname + '/public/annual/index.html', function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
  })
})

module.exports = router