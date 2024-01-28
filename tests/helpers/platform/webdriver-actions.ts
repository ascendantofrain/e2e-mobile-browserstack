import { waitForElement } from '../element.ts';
import {
	findElementAndroidTextContains,
	findElementAndroidTextEquals,
} from './android.ts';
import { isAndroid, isIOS } from './index.ts';
import {
	findElementIosNameEquals,
	findElementIosTextContains,
	findElementIosTextEquals,
	findElementIosTypeKey,
	findElementIosValueContains,
	findElementIosValueEquals,
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
		return await waitForElement(findElementIosNameEquals({ text }));
	}
	if (isAndroid()) {
		return await waitForElement(findElementAndroidTextEquals({ text }));
	}
}

export async function findElementNameContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosNameEquals({ text }));
	}
	if (isAndroid()) {
		return await waitForElement(findElementAndroidTextContains({ text }));
	}
}

export async function findElementTypeKey(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosTypeKey({ text }));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementAndroidTypeKey({ text }));
	}
}

export async function findElementValueEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosValueEquals({ text }));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementAndroidValue({ test }));
	}
}

export async function findElementValueContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementIosValueContains({ text }));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementAndroidValue({ test }));
	}
}
