import {
	findElementAndroidTextContains,
	findElementIosTextContains,
	isAndroid,
	isIOS,
} from '../helpers/index.ts';

import Page from './page.ts';

class About extends Page {
	get logoutButton() {
		if (isIOS()) {
			return findElementIosTextContains({ text: 'Log Out' });
		}
		if (isAndroid()) {
			return findElementAndroidTextContains({ text: 'Log Out' });
		}
	}

	async clickLogoutButton() {
		return this.logoutButton.click();
	}
}

export default new About();
