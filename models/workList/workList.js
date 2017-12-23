/**
 * Created by Clovin on 21/12/2017.
 */

const XLSX = require('xlsx')
const fs = require('fs')
let filePath = ``

let data = {}

function start (path) {
  filePath = path
  refreshData()

  fs.watchFile(filePath, () => {
    refreshData()
  })
}

function refreshData () {
  let workbook = XLSX.readFile(filePath)
  let firstSheetName = workbook.SheetNames[0]
  let firstSheet = workbook.Sheets[firstSheetName]

  let jsonSheet = XLSX.utils.sheet_to_json(firstSheet, {
    header: ['地点', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  })

  // handle table data
  let tableData = jsonSheet.filter(item => {
    if (item['地点'] && Object.keys(item).length === 8) {
      return item
    }
  })
  let tempTable = [];
  ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'].forEach(day => {
    tempTable.push({
      title: day,
      content: []
    })
  })
  tableData.forEach(item => {
    ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'].forEach((day, index) => {
      let data = item[day].split(/-+/)

      tempTable[index].content.push({
        place: item['地点'],
        worker: data[0],
        phone: data[1] ? data[1] : '报修请联系组长'
      })
    })
  })

  // handle tousu data
  let tempTousu = []
  jsonSheet.forEach(item => {
    for (let value of Object.values(item)) {
      if (value.includes('投诉')) {
        let temp = value.match(/\s+(\S+)\s+(\S+)/)
        tempTousu.push({
          worker: temp[1].split(/-+/)[0],
          phone: temp[1].split(/-+/)[1]
        })
        tempTousu.push({
          worker: temp[2].split(/-+/)[0],
          phone: temp[2].split(/-+/)[1]
        })
        return
      }
    }
  })

  // change data
  data.tousu = tempTousu
  data.table = tempTable
}

function getWorkList () {
  return data
}

let workListModel = { start, refreshData, getWorkList }

module.exports = workListModel