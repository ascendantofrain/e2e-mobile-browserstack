import { findElementNameEquals } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Footer extends Page {
	get profileTabButton() {
		return findElementNameEquals('Profile, icon Profile');
	}

	get timeCardsTabButton() {
		return findElementNameEquals('Time Cards');
	}

	async clickProfileTabButton() {
		(await this.profileTabButton).isEnabled();

		return (await this.profileTabButton).click();
	}

	async clickTimeCardsTabButton() {
		return (await this.timeCardsTabButton).click();
	}

	async timeCardsTabShouldBeDisabled() {
		return expect(await this.timeCardsTabButton).toBeDisabled();
	}
}

export default new Footer();
