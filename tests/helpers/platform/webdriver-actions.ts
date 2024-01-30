import { waitForElement } from '../element.ts';
import {
	findElementByTextContainsAndroid,
	findElementByTextEqualsAndroid
} from './android.ts';
import { isAndroid, isIOS } from './index.ts';
import {
	findElementByTypeOrXPathIos,
	findElementNameBeginsWithAndEndsWithIos,
	findElementNameEqualsIos,
	findElementTextContainsIos,
	findElementTextEqualsIos,
	findElementValueContainsIos,
	findElementValueEqualsIos
} from './ios.ts';

export async function findElementTextEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementTextEqualsIos(text));
	}
	if (isAndroid()) {
		return await waitForElement(findElementByTextEqualsAndroid(text));
	}
}

export async function findElementTextContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementTextContainsIos(text));
	}
	if (isAndroid()) {
		return await waitForElement(findElementByTextContainsAndroid(text));
	}
}

export async function findElementNameEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementNameEqualsIos(text));
	}
	if (isAndroid()) {
		return await waitForElement(findElementByTextEqualsAndroid(text));
	}
}

export async function findElementNameContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementNameEqualsIos(text));
	}
	if (isAndroid()) {
		return await waitForElement(findElementByTextContainsAndroid(text));
	}
}

export async function findElementNameBeginsWithAndEndsWith(
	beginsWith: string,
	endsWith: string
) {
	if (isIOS()) {
		return await waitForElement(
			findElementNameBeginsWithAndEndsWithIos(beginsWith, endsWith)
		);
	}
	if (isAndroid()) {
		//return await waitForElement(findElementByTextContainsAndroid(text));
	}
}

export async function findElementValueEquals(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementValueEqualsIos(text));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementValueEqualsAndroid({ test }));
	}
}

export async function findElementValueContains(text: string) {
	if (isIOS()) {
		return await waitForElement(findElementValueContainsIos(text));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementAndroidValue({ test }));
	}
}

export async function findElementByTypeOrXPath(type: string) {
	if (isIOS()) {
		return await waitForElement(findElementByTypeOrXPathIos(type));
	}
	if (isAndroid()) {
		//return await waitForElement(findElementByTypeIos({ type }));
	}
}
