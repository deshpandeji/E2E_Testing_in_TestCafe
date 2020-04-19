import { Selector } from 'testcafe'

const readXlsxFile = require('read-excel-file/node')

fixture`Data Driven Test with Excel using TestCafe`

test(`Read Data from Excel`, async t => {
  readXlsxFile('../POM_in_TestCafe/data/TestData.xlsx').then(rows => {
    console.log(rows)
    console.table(rows)
  })
})

test(`Read Data from Excel with Loop`, async t => {
  readXlsxFile('../POM_in_TestCafe/data/TestData.xlsx').then(rows => {
    rows.forEach(col => {
      col.forEach(data => {
        console.log(data)
        console.log(typeof data)
      })
    })
  })
})

test(`Read Data from Excel with For Loop`, async t => {
  readXlsxFile('../POM_in_TestCafe/data/TestData.xlsx').then(rows => {
    var i
    var j
    for (i in rows) {
      for (j in rows[i]) {
        console.dir(rows[i][j])
      }
    }
  })
})

test(`Read Data from Mulitple Excel Sheets`, async t => {
  readXlsxFile('../POM_in_TestCafe/data/TestData.xlsx', {
    getSheets: true,
  }).then(sheets => {
    sheets.forEach(obj => {
      console.log(obj.name)
    })
  })
})

test(`Read Data from Excel specific sheet with For Loop`, async t => {
  readXlsxFile('../POM_in_TestCafe/data/TestData.xlsx', { sheet: 'Sheet1' }).then(rows => {
    var i
    var j
    for (i in rows) {
      for (j in rows[i]) {
        console.dir(rows[i][j])
      }
    }
  })
})