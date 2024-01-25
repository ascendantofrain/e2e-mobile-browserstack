import { waitForElement } from '../element.ts';
import {
	findElementAndroidName,
	findElementAndroidTextContains,
	findElementAndroidTextEquals,
} from './android.ts';
import { isAndroid, isIOS } from './index.ts';
import {
	findElementIosName,
	findElementIosTextContains,
	findElementIosTextEquals,
} from './ios.ts';

export async function findElementTextEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosTextEquals({ text }));
	}
	if (isAndroid()) {
		return await waitForElement(findElementAndroidTextEquals({ text }));
	}
}

export async function findElementTextContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosTextContains({ text }));
	}
	if (isAndroid()) {
		return await waitForElement(findElementAndroidTextContains({ text }));
	}
}

export async function findElementNameEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosName({ text }));
	}
	if (isAndroid()) {
		return await waitForElement(findElementAndroidName({ text }));
	}
}
