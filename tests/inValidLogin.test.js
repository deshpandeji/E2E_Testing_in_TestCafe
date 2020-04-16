import { Selector } from 'testcafe'

//prettier-ignore
fixture`Valid login`
    .page`http://zero.webappsecurity.com/index.html`

test('User Login with Invalid credentials', async t => {
  const signInButton = Selector('#signin_button')
  const loginName = Selector('#user_login')
  const password = Selector('#user_password')
  const submitButton = Selector('.btn-primary')
  const loginForm = Selector('#login_form')
  const alertMessage = Selector('.alert-error')

  await t.click(signInButton)
  await t.typeText(loginName, 'username1', { paste: true })
  await t.typeText(password, 'password1', { paste: true })
  await t.click(submitButton)

  await t.expect(loginForm.exists).ok()
  await t
    .expect(alertMessage.innerText)
    .contains('Login and/or password are wrong.')
})
