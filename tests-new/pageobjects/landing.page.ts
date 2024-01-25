import { findElementTextContains } from '../helpers/platform/webdriver-actions.ts';
import Page from './page.ts';

class Landing extends Page {
	async header(username: string) {
		return await findElementTextContains(username);
	}

	async headerShouldContainUsername(username: string) {
		return expect(await this.header(username)).toExist();
	}
}

export default new Landing();
