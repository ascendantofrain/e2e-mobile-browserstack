import { findElementTextEquals } from '../helpers/platform/webdriver-actions.ts';
import { User } from '../helpers/users.ts';
import Landing from './landing.page.ts';
import Page from './page.ts';

class Login extends Page {
	async userLoginButton(username: string) {
		return await findElementTextEquals(username);
	}

	async clickUserLogin(user: User) {
		const button = await this.userLoginButton(user.username);
		await button.click();
		return Landing.headerShouldContainUsername(user.firstName);
	}
}

export default new Login();
