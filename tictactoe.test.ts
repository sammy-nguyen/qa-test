import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

});

test('add X into upper left square', async () => {

    await (await driver).findElement(By.id('cell-0')).click()
    //await xButton.sendKeys('X\n')
    await driver.sleep(2000)

});

test('add X into upper right square', async () => {

    await (await driver).findElement(By.id('cell-2')).click()
    //await xButton.sendKeys('X\n')
    await driver.sleep(2000)

});


test('add X into lower right square', async () => {

    await (await driver).findElement(By.id('cell-8')).click()
    //await xButton.sendKeys('X\n')
    await driver.sleep(4000)

});


