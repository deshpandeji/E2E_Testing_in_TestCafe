import { Selector, t } from 'testcafe'

class ForgottenPassword {
    constructor() {
        //this.getPasswordLink = Selector('a').withText('Forgot your password ?')
        this.emailInput = Selector("#user_email")
        this.message = Selector("div")
    }

    async search(text) {
        await t
          .typeText(this.searchTextbox, text, { paste: true, replace: true })
          .pressKey('enter')
      }
}

export default ForgottenPassword