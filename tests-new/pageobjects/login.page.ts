import {
	IonicButton,
	pause,
	switchToIdentity,
	switchToWeb,
} from '../helpers/index.ts';
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

	get loginButton() {
		return IonicButton.withTitle('Login');
	}

	async userLoginButton(username: string) {
		return IonicButton.withTitle(username);
	}

	async clickLogin() {
		return this.loginButton.tap();
	}

	async login(username: string, password: string) {
		await pause(5000);
		await switchToIdentity();

		await this.username.setValue(username);
		await this.password.setValue(password);
		await this.identityLoginButton.click();

		await switchToWeb();
	}

	async clickUserLogin(username: string) {
		const button = await this.userLoginButton(username);
		await button.click();
		return await pause(500);
	}
}

export default new Login();
