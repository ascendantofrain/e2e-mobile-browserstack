import { findElementNameEquals } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Modal extends Page {
	get doneButton() {
		return findElementNameEquals('Done');
	}

	async clickDoneButton() {
		if (!(await this.doneButton).isDisplayed()) {
			return;
		}

		(await this.doneButton).waitForEnabled();
		return (await this.doneButton).click();
	}
}

export default Modal;
