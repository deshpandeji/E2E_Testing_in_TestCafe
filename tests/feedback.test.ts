import { Selector } from 'testcafe'
import Feedback from '../pageObjects/pages/feedbackPage'

const feedback = new Feedback()

//prettier-ignore
fixture`Feedback Page`
    .page`http://zero.webappsecurity.com/index.html`

test('User submit a feedback', async t => {
  const feedbackLink = Selector('#feedback')
  await t.click(feedbackLink)
  await t.typeText(feedback.formName, 'Baban', { paste: true, replace: true  })
  await t.typeText(feedback.formEmail, 'Test@test.com', { paste: true, replace: true  })
  await t.typeText(feedback.formSubject, 'My Subject', { paste: true, replace: true  })
  await t.typeText(feedback.formComment, 'My Comments', { paste: true, replace: true  })
  await t.click(feedback.formSendMessageButton)
  await t.expect(feedback.formResposeMessage.innerText).contains('Baban')
})
