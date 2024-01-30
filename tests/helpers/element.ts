import { ElementActionOptions } from './definitions.ts';
import { Gestures } from './gestures.ts';

export async function waitForElement(
	selector: string,
	{ visibilityTimeout = 3000 }: ElementActionOptions = {}
) {
	const el = await $(selector);

	try {
		await el.waitForDisplayed({ timeout: visibilityTimeout });
	} catch (e) {
		await Gestures.checkIfDisplayedWithSwipeUp(el, 5);
	}

	await el.waitForEnabled({ timeout: visibilityTimeout });

	return el;
}
