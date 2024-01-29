import { findElementNameEquals } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Alert extends Page {
	get okButton() {
		return findElementNameEquals('OK');
	}

	get unsubmitButton() {
		return findElementNameEquals('Unsubmit');
	}

	async clickOkButton() {
		return (await this.okButton).click();
	}

	async clickUnsubmitButton() {
		return (await this.unsubmitButton).click();
	}

	async shouldHaveWarningMessage(message: string) {
		return expect(await findElementNameEquals(message)).toBeDisplayed();
	}
}

export default new Alert();
