/**
 * Created by Clovin on 04/01/2018.
 */

let express = require('express')
let router = express.Router()

router.get(`/sitemap.txt`, (req, res) => {
  res.sendFile(path.join(__dirname, '/public/sitemap.txt'))
})

router.get(`/baidu-verify-BB57E0BF13.txt`, (req, res) => {
  res.sendFile(path.join(__dirname, '/public/baidu-verify-BB57E0BF13.txt'))
})

router.get(`/baidu_verify_ORxw0HdOVR.html`, (req, res) => {
  res.sendFile(path.join(__dirname, '/public/baidu_verify_ORxw0HdOVR.html'))
})

module.exports = router