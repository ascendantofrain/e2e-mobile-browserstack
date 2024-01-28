import {
	findElementNameContains,
	findElementNameEquals,
	findElementValueContains
} from '../helpers/platform/webdriver-actions.ts';

import Page from './page.ts';

class Comments extends Page {
	get commentsButton() {
		return findElementNameEquals('Chat Bubble, icon Comments');
	}

	get getEmployeeCommentsTextArea() {
		return findElementValueContains('Employee Comments');
	}

	get saveButton() {
		return findElementNameEquals('Save');
	}

	get closeModalIcon() {
		return findElementNameContains('Close, icon');
	}

	async clickCommentsButton() {
		return (await this.commentsButton).click();
	}

	async typeComment(comment: string) {
		return (await this.getEmployeeCommentsTextArea).setValue(comment);
	}

	async clearComment(comment: string) {
		return (await this.getEmployeeCommentsTextArea).clearValue();
	}

	async saveComment() {
		return (await this.saveButton).click();
	}

	async closeCommentsModal() {
		return (await this.closeModalIcon).click();
	}
}

export default new Comments();
