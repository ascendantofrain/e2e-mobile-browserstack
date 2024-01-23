import { IonicPage } from './components/index.ts';

export class Ionic$ {
	static async $(selector: string): Promise<WebdriverIO.Element> {
		const activePage = await IonicPage.active();
		return activePage.$(selector);
	}

	static async $$(selector: string): Promise<WebdriverIO.Element[]> {
		const activePage = await IonicPage.active();
		return activePage.$$(selector);
	}
}

export * from './components/index.ts';
