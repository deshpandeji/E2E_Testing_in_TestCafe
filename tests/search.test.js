import { Selector } from 'testcafe'
import Navbar from '../pageObjects/componants/navbar'
import searchResultsPage from '../pageObjects/pages/searchResultsPage'

const navbar = new Navbar()
const searchresultpage = new searchResultsPage()
//prettier-ignore
fixture`Search Test`
    .page`http://zero.webappsecurity.com/index.html`

test('User Search online bank', async t => {
  navbar.search('online Bank')

  await t.expect(searchresultpage.searchResult.exists).ok()
  await t.expect(navbar.searchTextbox.exists).ok()
  await t
    .expect(searchresultpage.linkText.innerText)
    .contains('Zero - Free Access to Online Banking')
})
