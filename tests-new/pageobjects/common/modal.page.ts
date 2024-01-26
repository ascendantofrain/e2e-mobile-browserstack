import { findElementNameEquals } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

class Modal extends Page {
	get doneButton() {
		return findElementNameEquals('Done');
	}

	async clickDoneButton() {
		return (await this.doneButton).click();
	}
}

export default Modal;
