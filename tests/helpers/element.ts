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

	waitForEnabled(selector);

	return el;
}

export async function waitForEnabled(
	selector: string,
	{ visibilityTimeout = 5000 }: ElementActionOptions = {}
) {
	const el = await $(selector);

	await $(el).waitUntil(
		async () => {
			return (await this.isEnabled()) === true;
		},
		{ timeout: visibilityTimeout }
	);
}
