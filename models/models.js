/**
 * Created by Clovin on 04/01/2018.
 */
const path = require('path')

const workListModel = require('./workList/workList')
workListModel.start(path.join(__dirname, './workList/sheets/sheet.xlsx'))

const models = {
  getWorkList () {
    return workListModel.getWorkList()
  }
}

module.exports = models