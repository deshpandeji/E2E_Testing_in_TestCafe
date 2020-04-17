import { Selector } from 'testcafe'
import Navbar from '../pageObjects/componants/navbar'
import LoginPage from '../pageObjects/pages/loginPage'

const navbar = new Navbar()
const loginpage = new LoginPage()

//prettier-ignore
fixture`Invalid login`
    .page`http://zero.webappsecurity.com/index.html`

test('User Login with Invalid credentials', async t => {
  await t.click(navbar.signInButton)
  loginpage.loginToApp('username1', 'password1')
  await t
    .expect(loginpage.alertMessage.innerText)
    .contains('Login and/or password are wrong.')
})
