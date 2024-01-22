import { findElementIosTextEquals, findElementIosTextContains } from '../helpers/index.ts';
import Page from './page.ts';

class Landing extends Page {
  get header() {
    return $('#mainHeader h1');
  }

  async headerShouldContainUsername(username: string) {
    // if (true) {
    //   expect(await findElementIosTextContains({text: username}))
    // }
    expect(await this.header.getText()).toContain(username);
  }
}

export default new Landing();
