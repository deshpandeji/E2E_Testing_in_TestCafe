import { Selector } from 'testcafe'
import Feedback from '../pageObjects/pages/feedbackPage'

const feedback = new Feedback()

//prettier-ignore
fixture`Feedback Page`
    .page`http://zero.webappsecurity.com/index.html`

test('User submit a feedback', async t => {

  await t.click(feedback.feedbackLink)
  await t.typeText(feedback.yourName, 'Baban', { paste: true })
  await t.typeText(feedback.yourEmail, 'Test@test.com', { paste: true })
  await t.typeText(feedback.yourSubject, 'My Subject', { paste: true })
  await t.typeText(feedback.yourComment, 'My Comments', { paste: true })
  await t.click(feedback.sendMessageButton)
  feedback.waitFor(4000)
  await t.expect(feedback.resposeMessage.innerText).contains('Baban')
  await t.expect(feedback.feedbackLink.exists).notOk()
})
