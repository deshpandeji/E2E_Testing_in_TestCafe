import { Selector } from 'testcafe'

//prettier-ignore
fixture`New Payee test`
    .page`http://zero.webappsecurity.com/index.html`

    test
    .before(async t =>{
        const signInButton = Selector("#signin_button")
        const loginName = Selector("#user_login")
        const password = Selector("#user_password")
        const submitButton = Selector(".btn-primary")
        const loginForm = Selector("#login_form")
        const accountSummery = Selector("#account_summary_tab")
        const userIcon = Selector(".icon-user")
        const logOut = Selector("#logout_link")

        await t.click(signInButton)
        await t.typeText(loginName, "username", {paste:true})
        await t.typeText(password, "password", {paste: true})
        await t.click(submitButton)
    })
    ("User Add a new Payee", async t => {
        const payBillTab = Selector("#pay_bills_tab")
        const addNewPayeeTab = Selector("a").withText("Add New Payee")
        const payeeName = Selector("#np_new_payee_name")
        const payeeAddress = Selector("#np_new_payee_address")
        const payeeAccount = Selector("#np_new_payee_account")
        const payeeDetails = Selector("#np_new_payee_details")
        const addButton = Selector("input").withAttribute("value", "Add")
        const addMessage = Selector("#alert_content")

        await t.click(payBillTab)
        await t.click(addNewPayeeTab)
        await t.typeText(payeeName, "Dinesh Diwan", {paste:true})
        await t.typeText(payeeAddress, "WAkad, Pune", {paste:true})
        await t.typeText(payeeAccount, "1234567890", {paste:true})
        await t.typeText(payeeDetails, "Current Account", {paste:true})
        await t.click(addButton)
        

        await t.expect(addMessage.innerText).contains("Dinesh Diwan")


    })