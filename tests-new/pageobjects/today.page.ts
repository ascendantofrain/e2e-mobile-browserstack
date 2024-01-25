import { isAm, isPm } from '../helpers/datetime.ts';
import { findElementNameEquals } from '../helpers/platform/webdriver-actions.ts';

import Page from './page.ts';

class Today extends Page {
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

	get addTodaysHoursButton() {
		return findElementNameEquals('Add, icon');
	}

	get regularHoursSummary() {
		var regularLabel = findElementNameEquals('Regular');
		return;
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

	async clickAddTodaysHoursButton() {
		return (await this.addTodaysHoursButton).click();
	}
}

export default new Today();
