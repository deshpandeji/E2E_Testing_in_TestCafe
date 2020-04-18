import { Selector } from 'testcafe'
import Navbar from '../pageObjects/componants/navbar'

const navbar = new Navbar()
const dataSet = require('../data/data.json')

fixture`Data Driven Test using TestCafe`
  .page`http://zero.webappsecurity.com/index.html`

dataSet.forEach(data => {
  test(`Test Search with Data Driven`, async t => {
    await t.typeText(navbar.searchTextbox, data.SearchText, {
      paste: true,
      replace: true,
    })
    await t.pressKey('enter')
  })
})
