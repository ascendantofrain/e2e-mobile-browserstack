import {
	findElementNameContains,
	findElementNameEquals
} from '../../helpers/platform/webdriver-actions.ts';
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

	get submitButton() {
		return findElementNameEquals('Submit');
	}

	get celebration() {
		return findElementNameEquals('Checkmark, icon');
	}

	get timeCardSubmittedMessage() {
		return findElementNameEquals('Time Card Submitted!');
	}

	get goToTimeCardsLink() {
		return findElementNameEquals('Go to Time Cards');
	}

	async verifyTimeCardSubmitted() {
		expect(await this.celebration).toBeDisplayed;
		expect(await this.timeCardSubmittedMessage).toBeDisplayed;
	}

	async clickNextDayForwardButton() {
		if ((await this.nextDayForwardButton).Enabled)
			return (await this.nextDayForwardButton).click();
	}

	async clickNextDayBackwardsButton() {
		if ((await this.nextDayBackwardsButton).Enabled)
			return (await this.nextDayBackwardsButton).click();
	}

	async enterRegularHours(hours: string) {
		(await this.regularHoursInput).click();
		return (await this.regularHoursInput).setValue(hours);
	}

	async clickSubmitButton() {
		return (await this.submitButton).click();
	}

	async clickGoToTimeCardsLink() {
		return (await this.goToTimeCardsLink).click();
	}
}

export default new FullModal();
