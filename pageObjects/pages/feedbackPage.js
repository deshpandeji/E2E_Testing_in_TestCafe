import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class Feedback extends BasePage {
  constructor() {
    super()
    this.feedbackLink = Selector('#feedback')
    this.yourName = Selector('#name')
    this.yourEmail = Selector('#email')
    this.yourSubject = Selector('#subject')
    this.yourComment = Selector('#comment')
    this.sendMessageButton = Selector('input').withAttribute(
      'value',
      'Send Message'
    )
    this.resposeMessage = Selector('div')
  }
}

export default Feedback
