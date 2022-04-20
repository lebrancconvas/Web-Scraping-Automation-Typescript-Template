import puppeteer from 'puppeteer';

const MainPuppeteer = async() =>
{
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();

	const link: string = "";

	await page.goto(link);
}

export default MainPuppeteer;