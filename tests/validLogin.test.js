import { Selector } from 'testcafe'
import Navbar from '../pageObjects/componants/navbar'
import LoginPage from '../pageObjects/pages/loginPage'

const navbar = new Navbar()
const loginpage = new LoginPage()

//prettier-ignore
fixture`Valid login`
    .page`http://zero.webappsecurity.com/index.html`

test('User Login with valid credentials', async t => {
  // const signInButton = Selector('#signin_button')
  // const loginForm = Selector('#login_form')

  await t.click(navbar.signInButton)
  loginpage.loginToApp('username', 'password')
  const accountSummery = Selector('#account_summary_tab')

  await t.expect(accountSummery.exists).ok()
  await t.expect(loginpage.loginForm.exists).notOk()

  await t.click(navbar.userIcon)
  await t.click(navbar.logOut)

  await t.expect(accountSummery.exists).notOk()
  await t.expect(navbar.logOut.exists).notOk()
  await t.expect(navbar.signInButton.exists).ok()
})
