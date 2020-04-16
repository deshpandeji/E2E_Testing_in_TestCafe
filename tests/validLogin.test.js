import { Selector } from 'testcafe'

//prettier-ignore
fixture`Valid login`
    .page`http://zero.webappsecurity.com/index.html`

    test("User Login with valid credentials", async t => {
        const signInButton = Selector("#signin_button")
        const loginName = Selector("#user_login")
        const password = Selector("#user_password")
        const submitButton = Selector(".btn-primary")
        const loginForm = Selector("#login_form")
        const accountSummery = Selector("#account_summary_tab")
        const userIcon = Selector(".icon-user")
        const logOut = Selector("#logout_link")
        //const homeMenu = Selector("#homeMenu")

        await t.click(signInButton)
        await t.typeText(loginName, "username", {paste:true})
        await t.typeText(password, "password", {paste: true})
        await t.click(submitButton)
        

        await t.expect(accountSummery.exists).ok()
        await t.expect(loginForm.exists).notOk()

        await t.click(userIcon)
        await t.click(logOut)

        await t.expect(accountSummery.exists).notOk()
        await t.expect(signInButton.exists).ok()

    })