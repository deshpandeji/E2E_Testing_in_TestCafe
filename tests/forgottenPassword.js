import { Selector, t } from 'testcafe'
import Navbar from '../pageObjects/componants/navbar'
import LoginPage from '../pageObjects/pages/loginPage'
import ForgottenPassword from '../pageObjects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const loginpage = new LoginPage()
const forgotpassword = new ForgottenPassword()

//prettier-ignore
fixture`Forgotten Password`
    .page`http://zero.webappsecurity.com/index.html`

test('User Request Password to email', async t => {
  //const signInButton = Selector('#signin_button')
  //const getPasswordLink = Selector('a').withText('Forgot your password ?')
  //const emailInput = Selector("#user_email")
  //const message = Selector("div")

  await t.click(navbar.signInButton)
  await t.click(loginpage.getPasswordLink)
  await t.typeText(forgotpassword.emailInput, 'test@test.com', {
    paste: true,
    replace: true,
  })
  await t.pressKey('enter')
  await t.expect(forgotpassword.message.innerText).contains('test@test.com')
  await t.expect(forgotpassword.emailInput.exists).notOk()
})
