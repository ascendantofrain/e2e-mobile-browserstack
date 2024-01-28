import { findElementNameEquals } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Keypad extends Page {
	get doneButton() {
		return findElementNameEquals('Done');
	}

	async clickDoneButton() {
		return (await this.doneButton).click();
	}
}

export default new Keypad();
