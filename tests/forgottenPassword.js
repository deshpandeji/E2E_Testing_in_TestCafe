import { Selector, t } from 'testcafe'

//prettier-ignore
fixture`Forgotten Password`
    .page`http://zero.webappsecurity.com/index.html`

test('User Request Password to email', async t => {
  const signInButton = Selector('#signin_button')
  const getPasswordLink = Selector('a').withText('Forgot your password ?')
  const emailInput = Selector("#user_email")
  const sendButton = Selector(".btn-primary")
  const message = Selector("div")

  await t.click(signInButton)
  await t.click(getPasswordLink)
  await t.typeText(emailInput, "test@test.com", {paste: true})
  await t.pressKey("enter")
  await t.expect(message.innerText).contains("test@test.com")
  await t.expect(emailInput.exists).notOk()

})
