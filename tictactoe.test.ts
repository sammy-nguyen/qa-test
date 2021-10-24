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


describe('add Xs', async () => {

    test('add X into upper left square', async () => {

        const box = await (await driver).findElement(By.id('cell-0'))
        await box.click()
        expect(await box.getText()).toContain('X')
        await driver.sleep(2000)

    });



    test('add X into upper right square', async () => {

        const box = await (await driver).findElement(By.id('cell-2'))
        await box.click()
        expect(await box.getText()).toContain('X')
        await driver.sleep(2000)

    });


    test('add X into lower right square', async () => {

        const box = await (await driver).findElement(By.id('cell-8'))
        await box.click()
        expect(await box.getText()).toContain('X')
        await driver.sleep(4000)

    });

});


test('Check to see that the computer moves ', async () => {
    await driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click()


    await (await driver).findElement(By.id('cell-1')).click()
    const cellOne = await (await driver).findElement(By.id('cell-0')).getText()
    expect(cellOne).toContain('O')


    await driver.sleep(4000)

});
