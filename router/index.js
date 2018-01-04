/**
 * Created by Clovin on 04/01/2018.
 */
let express = require('express')
let router = express.Router()
const ssr = require('../utils/ssr')

const isProd = process.env.NODE_ENV === 'production'

router.get(`/not-support`, (req, res) => {
  res.sendFile(path.join(__dirname, '../views/not-support/not-support.html'))
})

router.get('*', isProd ? ssr.render : (req, res) => {
  ssr.readyPromise.then(() => ssr.render(req, res))
})

module.exports = router