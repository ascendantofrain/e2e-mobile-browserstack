import { ElementSelector } from '../definitions';

export function findElementAndroidTextEquals({ text }: ElementSelector) {
	if (text) {
		return `android=new UiSelector().text("${text}")`;
	} else {
		throw new Error('Unknown text equals selector strategy');
	}
}

export function findElementAndroidTextContains({ text }: ElementSelector) {
	if (text) {
		return `android=new UiSelector().textContains("${text}")`;
	} else {
		throw new Error('Unknown text contains selector strategy');
	}
}

export function findElementAndroidTypeKey({ text }: ElementSelector) {
	// if (text) {
	// 	return `-ios class chain:**/XCUIElementTypeKey[\`name == "${text}" AND label == "${text}"\`]`;
	// } else {
	throw new Error('Not implemented');
	//}
}
