import {
	findElementNameEquals,
	findElementTypeKey,
} from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Keypad extends Page {
	get doneButton() {
		return findElementNameEquals('Done');
	}

	async clickDoneButton() {
		return (await this.doneButton).click();
	}

	async clickNumKeys(keys: string) {
		for (const c of keys) {
			(await findElementTypeKey(c.toString())).click();
		}
	}
}

export default new Keypad();
