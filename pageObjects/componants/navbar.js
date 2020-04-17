import { Selector, t } from 'testcafe'

class Navbar {
  constructor() {
    this.searchTextbox = Selector('#searchTerm')
    this.signInButton = Selector('#signin_button')
    this.userIcon = Selector('.icon-user')
    this.logOut = Selector('#logout_link')
  }

  async search(text) {
    await t
      .typeText(this.searchTextbox, text, { paste: true, replace: true })
      .pressKey('enter')
  }
}

export default Navbar
