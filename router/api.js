/**
 * Created by Clovin on 04/01/2018.
 */
let express = require('express')
let router = express.Router()
const models = require('../models/models')

router.get(`/workList`, (req, res) => {
  res.json(models.getWorkList())
})

module.exports = router