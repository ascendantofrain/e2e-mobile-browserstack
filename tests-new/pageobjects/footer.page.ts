import {
	findElementAndroidName,
	findElementIosName,
	isAndroid,
	isIOS,
} from '../helpers/index.ts';
import Page from './page.ts';

class Footer extends Page {
	get profileTabButton() {
		if (isIOS()) {
			return findElementIosName({ text: 'Profile, icon Profile' });
		}
		if (isAndroid()) {
			return findElementAndroidName({ text: 'Profile, icon Profile' });
		}
	}

	async clickProfileTabButton() {
		return this.profileTabButton.click();
	}
}

export default new Footer();
