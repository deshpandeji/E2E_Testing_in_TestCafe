import { Selector, t } from 'testcafe'

class FeedbackPage {
  formName: Selector = Selector('#name')
  formEmail: Selector = Selector('#email')
  formSubject: Selector = Selector('#subject')
  formComment: Selector = Selector('#comment')
  formSendMessageButton: Selector = Selector('input').withAttribute(
    'value',
    'Send Message'
  )
  formResposeMessage: Selector = Selector('div')

  async submitFeedback(t: TestController) {
    await t
      .typeText(this.formName, 'Baban', { paste: true, replace: true })
      .typeText(this.formEmail, 'test@test.com', { paste: true, replace: true })
      .typeText(this.formSubject, 'My Subject', { paste: true, replace: true })
      .typeText(this.formComment, 'My Comments', { paste: true, replace: true })
      .click(this.formSendMessageButton)
  }
}

export default FeedbackPage
