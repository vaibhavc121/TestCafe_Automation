import { Selector } from 'testcafe';

const testData = require('./testData.json'); 
fixture `Custom Test`
    .page `https://testhrms.onenfinity.com/HrCore/Home/GettingStarted`;

testData.forEach(data => {
    test(`Test Login with username: ${data.username}`, async t => {
        const usernameInput = Selector('input[name="Username"]');
        const passwordInput = Selector('input[name="Password"]');
        const loginButton = Selector('span.dx-button-text');

        // Perform actions
        await t
            .typeText(usernameInput, data.username)
            .typeText(passwordInput, data.password)
            .click(loginButton);

        // Add assertions
        // const loggedInText = Selector('#welcomeMessage').innerText;
        // await t.expect(loggedInText).contains('Welcome', 'Login failed!');
    });
});
