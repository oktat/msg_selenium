

const { Builder, By } = require("selenium-webdriver");
const chrome = require('chromedriver');
 
const url = 'http://localhost:3002';
 
describe('Üzenő', () => {
    var driver = null;
    beforeAll(() => {
        driver = new Builder().forBrowser("chrome").build();
    });
    it('Egy', async () => {
        await driver.get(url);
        await driver.findElement(By.id('msg')).sendKeys('Valami');        
        await driver.findElement(By.id('enterButton')).click();
        const text = await driver.findElement(By.className('box')).getText();        
        expect(text).toBe('Valami');
    });
    it('Kettő', async () => {
        await driver.get(url);
        await driver.findElement(By.id('msg')).sendKeys('Más');        
        await driver.findElement(By.id('enterButton')).click();
        const text = await driver.findElement(By.className('box')).getText();        
        expect(text).toBe('Más');
    });
    afterAll(() => {
        driver.quit();
    });
});