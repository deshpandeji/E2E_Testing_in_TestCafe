import { Selector } from 'testcafe'

//prettier-ignore
fixture`Feedback Page`
    .page`http://zero.webappsecurity.com/index.html`

test('User submit a feedbac', async t => {
  const feedbackLink = Selector('#feedback')
  const yourName = Selector('#name')
  const yourEmail = Selector('#email')
  const yourSubject = Selector('#subject')
  const yourComment = Selector('#comment')
  const sendMessageButton = Selector('input').withAttribute(
    'value',
    'Send Message'
  )
  const resposeMessage = Selector('div')

  await t.click(feedbackLink)
  await t.typeText(yourName, 'Baban', { paste: true })
  await t.typeText(yourEmail, 'Test@test.com', { paste: true })
  await t.typeText(yourSubject, 'My Subject', { paste: true })
  await t.typeText(yourComment, 'My Comments', { paste: true })
  await t.click(sendMessageButton)

  await t.expect(resposeMessage.innerText).contains('Baban')
  await t.expect(feedbackLink.exists).notOk()
})
