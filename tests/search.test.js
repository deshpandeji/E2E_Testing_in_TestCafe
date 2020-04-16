import { Selector } from 'testcafe'

//prettier-ignore
fixture`Search Test`
    .page`http://zero.webappsecurity.com/index.html`

    test("User Search online bank", async t => {
        const searchTextbox = Selector("#searchTerm")
        const searchResult = Selector("h2")
        const linkText = Selector("div")

        await t.typeText(searchTextbox, "online Bank", {paste:true})
        await t.pressKey("enter")

        await t.expect(searchResult.exists).ok()
        await t.expect(linkText.innerText).contains("Zero - Free Access to Online Banking")
        

    })