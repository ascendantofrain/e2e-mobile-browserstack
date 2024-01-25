import { pause, User } from '../helpers/index.ts';
import { findElementTextEquals } from '../helpers/platform/webdriver-actions.ts';
import Landing from './landing.page.ts';
import Page from './page.ts';

class Login extends Page {
	get username() {
		return $('#Username');
	}

	get password() {
		return $('#Password');
	}

	get identityLoginButton() {
		return $('#loginButton');
	}

	// async loginButton() {
	// 	return await findElementTextEquals('Login');
	// }

	async userLoginButton(username: string) {
		return await findElementTextEquals(username);
	}

	// async clickLogin() {
	// 	return (await this.loginButton()).click();
	// }

	// async login(username: string, password: string) {
	// 	await pause(5000);
	// 	await switchToIdentity();

	// 	await this.username.setValue(username);
	// 	await this.password.setValue(password);
	// 	await this.identityLoginButton.click();

	// 	await switchToWeb();
	// }

	async clickUserLogin(user: User) {
		const button = await this.userLoginButton(user.username);
		await button.click();
		await pause(500);
		return Landing.headerShouldContainUsername(user.firstName);
	}
}

export default new Login();
