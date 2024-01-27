import { findElementTextContains } from '../helpers/platform/webdriver-actions.ts';

import Page from './page.ts';

class About extends Page {
	get logoutButton() {
		return findElementTextContains('Log Out');
	}

	async clickLogoutButton() {
		return (await this.logoutButton).click();
	}
}

export default new About();
