import {
	findElementNameContains,
	findElementNameEquals
} from '../helpers/platform/webdriver-actions.ts';

import Page from './page.ts';

class TimeCards extends Page {
	get ellipsisButton() {
		return findElementNameEquals('Ellipsis Horizontal, icon');
	}

	get resetTimeCardHoursAction() {
		return findElementNameEquals('Reset Time Card Hours');
	}

	get resetAlertButton() {
		return findElementNameEquals('Reset');
	}

	get commentsButton() {
		return findElementNameContains('Comments');
	}

	get editTimeCardButton() {
		return findElementNameEquals('Edit Time Card');
	}

	async submitHoursButton(hours: string) {
		return findElementNameEquals(`Submit ${hours} hours`);
	}

	async resetTimeCardHours() {
		await this.clickEllipsisButton();
		await this.clickResetTimeCardHours();
		await this.clickResetAlertButton();
	}

	async clickEllipsisButton() {
		return (await this.ellipsisButton).click();
	}

	async clickResetTimeCardHours() {
		return (await this.resetTimeCardHoursAction).click();
	}

	async clickResetAlertButton() {
		return (await this.resetAlertButton).click();
	}

	async clickSubmitHoursButton(hours: string) {
		return (await this.submitHoursButton(hours)).click();
	}

	async clickEditTimeCardButton() {
		return (await this.editTimeCardButton).click();
	}
}

export default new TimeCards();
