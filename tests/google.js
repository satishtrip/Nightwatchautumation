module.exports ={
    '@tags': ['google'],
    'Google search for satish'(browser){
        const mainQuery = "satish tripathi";
        const mainQueryInputSelector = 'input[name="as_q"]'
        browser
        .url('https://www.google.co.in/advanced_search')
        .setValue(mainQueryInputSelector, mainQuery)
        .saveScreenshot('tests_output/google.png')
    }
}