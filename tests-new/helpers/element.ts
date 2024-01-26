import { ElementActionOptions } from './definitions';
import { Gestures } from './gestures.ts';

export async function waitForElement(
	selector: string,
	{ visibilityTimeout = 3000 }: ElementActionOptions = {},
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

export async function waitForEnabled(selector: string,
	{ visibilityTimeout = 5000 }: ElementActionOptions = {},
) {
	const el = await $(selector);

	await $(el).waitUntil(async () => {
		return (await this.isEnabled()) === true;
	}, { timeout: visibilityTimeout });
}

export async function blur(
	selector: string,
	{ visibilityTimeout = 5000 }: ElementActionOptions = {},
) {
	return browser.execute((sel) => {
		const el = document.querySelector(sel);
		if (el) {
			(el as any).blur();
		}
	}, selector);
}

export async function tryAcceptAlert() {
	try {
		return driver.acceptAlert();
	} catch (e) {
		console.warn('No alert to accept');
	}
}
