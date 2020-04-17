import { Selector, t } from 'testcafe'

class searchResultsPage {
  constructor() {
    this.searchResult = Selector('h2')
    this.linkText = Selector('div')
  }
}

export default searchResultsPage
