import { isAm, isPm } from '../helpers/datetime.ts';
import { findElementNameEquals } from '../helpers/platform/webdriver-actions.ts';

import Page from './page.ts';

class Today extends Page {
	get punchInButton() {
		return findElementNameEquals('Punch In');
	}

	get punchOutButton() {
		return findElementNameEquals('Punch Out');
	}

	get punchedInTimeDisplay() {
		return findElementNameEquals('Punched In');
	}

	get pendingTimeDisplay() {
		return findElementNameEquals('Pending');
	}

	get inOutTimeDisplay() {
		return findElementNameEquals('In / Out');
	}

	get setTimeInButton() {
		return findElementNameEquals('Set Time In');
	}

	get setTimeOutButton() {
		return findElementNameEquals('Set Time Out');
	}

	get amTimePeriod() {
		return findElementNameEquals('AM');
	}

	get pmTimePeriod() {
		return findElementNameEquals('PM');
	}

	get saveButton() {
		return findElementNameEquals('Save');
	}

	get enterTodaysHoursButton() {
		return findElementNameEquals('Add, icon');
	}

	async clickPunchInButton() {
		return (await this.punchInButton).click();
	}

	async clickPunchOutButton() {
		return (await this.punchOutButton).click();
	}

	async verifyPunchedInTimeDisplay() {
		expect(await this.punchedInTimeDisplay).toBeDisplayed();
	}

	async verifyPendingTimeDisplay() {
		expect(await this.pendingTimeDisplay).toBeDisplayed();
	}

	async verifyInOutTimeDisplay() {
		expect(await this.inOutTimeDisplay).toBeDisplayed();
	}

	async clickSetTimeInButton() {
		return (await this.setTimeInButton).click();
	}

	async clickSetTimeOutButton() {
		return (await this.setTimeOutButton).click();
	}

	async clickAmTimePeriod() {
		if (!(await isAm())) {
			return (await this.amTimePeriod).click();
		}
	}

	async clickPmTimePeriod() {
		if (!(await isPm())) {
			return (await this.pmTimePeriod).click();
		}
	}

	async clickSaveButton() {
		return (await this.saveButton).click();
	}

	async clickEnterTodaysHoursButton() {
		return (await this.enterTodaysHoursButton).click();
	}
}

export default new Today();
