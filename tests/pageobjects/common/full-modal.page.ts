import {
	findElementNameContains,
	findElementNameEquals,
} from '../../helpers/platform/webdriver-actions.ts';
import { Keypad } from '../pages.ts';
import Modal from './modal.page.ts';

class FullModal extends Modal {
	get nextDayForwardButton() {
		return findElementNameContains('Forward, icon');
	}

	get nextDayBackwardsButton() {
		return findElementNameContains('Back, icon');
	}

	get regularHoursInput() {
		return findElementNameEquals('Regular');
	}

	async clickNextDayForwardButton() {
		if ((await this.nextDayForwardButton).Enabled)
			return (await this.nextDayForwardButton).click();
	}

	async clickNextDayBackwardsButton() {
		if ((await this.nextDayBackwardsButton).Enabled)
			return (await this.nextDayBackwardsButton).click();
	}

	async clickRegularHoursInput() {
		return (await this.regularHoursInput).click();
	}

	async enterRegularHours(hours: string) {
		return await Keypad.clickNumKeys(hours);
	}
}

export default new FullModal();