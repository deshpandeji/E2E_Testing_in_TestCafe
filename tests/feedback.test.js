import { Selector } from 'testcafe'
import Feedback from '../pageObjects/pages/feedbackPage'

const feedback = new Feedback()

//prettier-ignore
fixture`Feedback Page`
    .page`http://zero.webappsecurity.com/index.html`

test('User submit a feedbac', async t => {
  // const feedbackLink = Selector('#feedback')
  // const yourName = Selector('#name')
  // const yourEmail = Selector('#email')
  // const yourSubject = Selector('#subject')
  // const yourComment = Selector('#comment')
  // const sendMessageButton = Selector('input').withAttribute(
  //   'value',
  //   'Send Message'
  // )
  // const resposeMessage = Selector('div')

  await t.click(feedback.feedbackLink)
  await t.typeText(feedback.yourName, 'Baban', { paste: true })
  await t.typeText(feedback.yourEmail, 'Test@test.com', { paste: true })
  await t.typeText(feedback.yourSubject, 'My Subject', { paste: true })
  await t.typeText(feedback.yourComment, 'My Comments', { paste: true })
  await t.click(feedback.sendMessageButton)

  await t.expect(feedback.resposeMessage.innerText).contains('Baban')
  await t.expect(feedback.feedbackLink.exists).notOk()
})
