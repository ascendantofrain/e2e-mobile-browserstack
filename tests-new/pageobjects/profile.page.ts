import { IonicButton } from '../helpers/index.ts';

import Page from './page.ts';

class About extends Page {
  get profileTabButton() {
    return $('#tab-button-profile');
  }

  get logoutButton() {
    return IonicButton.withTitle('Log Out');
  }

  async clickProfileTabButton() {
    return this.profileTabButton.click();
  }

  async clickLogoutButton() {
    return this.logoutButton.tap();
  }
}

export default new About();
