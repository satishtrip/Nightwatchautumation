module.exports ={
    '@tags': ['google'],
    'Google search  for : satish'(browser){
        const mainQuery = "satish tripathi";
        const mainQueryInputSelector = 'input[name="as_q"]'
        const languageDropDownOptions = '#lr_button';
        const languageDropDownOptionsSelectors = '.goog-menuitem[value = "lang_hi"]';
        const lastupdatedropdownOpenerSelector = '#as_qdr_button'
        const lastupdatedropdownValueSelector = '.goog-menuitem[value = "w"]'
        const submitButtonSelector = '.jfk-button[type = "submit"]'
        browser
        .url('https://www.google.co.in/advanced_search')
        .setValue(mainQueryInputSelector, mainQuery)
        .click(languageDropDownOptions)
        .click(languageDropDownOptionsSelectors)
        .click(lastupdatedropdownOpenerSelector)
        .click(lastupdatedropdownValueSelector)
        .click(submitButtonSelector)
        .assert.urlContains('as_q=satish+tripathi', 'Searched query is Satish Tripathi in Hindi')
        .saveScreenshot('tests_output/google.png')
    }
}

 