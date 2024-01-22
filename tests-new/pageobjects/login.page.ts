import { IonicButton, findElementIosTextEquals, pause } from '../helpers/index.ts';
import webview, { CONTEXT_REF } from '../helpers/webview.ts';
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
    // if (true) {
    //   return findElementIosTextEquals({ text: username });
    // }
    return $(`ion-button=${username}`);
  }

  async clickLogin() {
    await webview.switchToContext(CONTEXT_REF.WEBVIEW);
    return this.loginButton.tap();
  }

  async login(username: string, password: string) {
    await pause(3000);
    await webview.switchToContext(CONTEXT_REF.IDENTITY);

    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.identityLoginButton.click();
  }

  async clickUserLogin(username: string) {
    return (await this.userLoginButton(username)).click();
  }
}

export default new Login();
