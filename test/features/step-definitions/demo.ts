import { Given, When, Then} from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/, async function(){
    await browser.url("https://www.google.com")
    await browser.pause(3000)
    console.log("Sucessfully google web page has opened!!!")
})

When(/^Search with (.*)$/, async function(searchItem){
     console.log(`>> searchItem: ${searchItem}`);

     let element = await $(`[name=q]`)
     await element.setValue(searchItem)
     await browser.keys("Enter")
})
When(/^Click on the first search result$/, async function name() {
let element= await $(`<h3>`)
element.click()
    
})

Then(/^URL should match (.*)$/, async function(expectedURL){
    console.log(`>> expectedURL: ${expectedURL}`);
   let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL)
})