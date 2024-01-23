import {
	findElementAndroidTextContains,
	findElementIosTextContains,
	isAndroid,
	isIOS,
} from '../helpers/index.ts';
import Page from './page.ts';

class Landing extends Page {
	async header(username: string) {
		if (isIOS()) {
			return findElementIosTextContains({ text: username });
		}
		if (isAndroid()) {
			return findElementAndroidTextContains({ text: username });
		}
	}

	async headerShouldContainUsername(username: string) {
		if (isIOS()) {
			return expect(await this.header(username)).toExist();
		}
		if (isAndroid()) {
			return expect(await this.header(username)).toExist();
		}
	}
}

export default new Landing();
