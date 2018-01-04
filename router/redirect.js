/**
 * redirect router
 *
 * Created by Clovin on 04/01/2018.
 */
let express = require('express')
let router = express.Router()

router.get(`/index.html`, (req, res) => {
  res.redirect(301, '/')
})

router.get(`/guide_foreword.html`, (req, res) => {
  res.redirect(301, '/guide/foreword')
})

router.get(`/guide_introduction.html`, (req, res) => {
  res.redirect(301, '/guide/netenv')
})

router.get(`/guide_clienterror.html`, (req, res) => {
  res.redirect(301, '/guide/repairDX')
})

router.get(`/guide_join.html`, (req, res) => {
  res.redirect(301, '/guide/joinUs')
})

router.get(`/guide_newclient.html`, (req, res) => {
  res.redirect(301, '/guide/introductionDX')
})

router.get(`/guide_pcPrepare1.html`, (req, res) => {
  res.redirect(301, '/guide/prepareDX')
})

router.get(`/guide_pcprepare2.html`, (req, res) => {
  res.redirect(301, '/guide/preparePPPoE')
})

router.get(`/guide_pcset1.html`, (req, res) => {
  res.redirect(301, '/guide/setWindowsDX')
})

router.get(`/guide_pcset2.html`, (req, res) => {
  res.redirect(301, '/guide/setMacDX')
})

router.get(`/guide_pcset3.html`, (req, res) => {
  res.redirect(301, '/guide/setPPPoE')
})

router.get(`/guide_phonePrepare.html`, (req, res) => {
  res.redirect(301, '/guide/preparePhoneDX')
})

router.get(`/guide_phoneset.html`, (req, res) => {
  res.redirect(301, '/guide/setPhoneDX')
})

router.get(`/guide_pppoeerror.html`, (req, res) => {
  res.redirect(301, '/guide/repairPPPoE')
})

router.get(`/guide_repair.html`, (req, res) => {
  res.redirect(301, '/guide/repairWay')
})

router.get(`/guide_paper.html`, (req, res) => {
  res.redirect(301, '/repairGuide/paper')
})

router.get(`/guide_phonerepair.html`, (req, res) => {
  res.redirect(301, '/repairGuide/phone')
})

router.get(`/guide_wechat.html`, (req, res) => {
  res.redirect(301, '/repairGuide/wechat')
})

router.get(`/join.html`, (req, res) => {
  res.redirect(301, 'http://zx.zsxyww.com/')
})

module.exports = router