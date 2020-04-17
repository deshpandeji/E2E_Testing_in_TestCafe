import { Selector, t } from 'testcafe'

class Feedback{
    constructor(){
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