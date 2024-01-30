import { findElementByTypeOrXPath } from '../../helpers/platform/webdriver-actions.ts';
import Page from '../page.ts';

const toolbar = '//XCUIElementTypeToolbar[@name="Toolbar"]';
const keypad = '//XCUIElementTypeKeyboard';

class Keypad extends Page {
	async doneButton() {
		return await findElementByTypeOrXPath(
			`${toolbar}//XCUIElementTypeAny[@name="Done"]`
		);
	}

	async clickDoneButton() {
		return (await this.doneButton()).click();
	}
}

export default new Keypad();
