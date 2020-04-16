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

        await t.click(signInButton)
        await t.typeText(loginName, "username", {paste:true})
        await t.typeText(password, "password", {paste: true})
        await t.click(submitButton)

        //await t.expect(loginForm.exists).ok()
    })