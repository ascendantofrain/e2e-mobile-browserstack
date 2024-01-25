import { ElementSelector } from '../definitions';

export function findElementIosTextEquals({ text }: ElementSelector) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`label == "${text}" OR value == "${text}"\`]`;
	} else {
		throw new Error('Unknown text equals selector strategy');
	}
}

export function findElementIosTextContains({ text }: ElementSelector) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`label CONTAINS[c] "${text}" OR value CONTAINS[c] "${text}"\`]`;
	} else {
		throw new Error('Unknown text contains selector strategy');
	}
}

export function findElementIosName({ text }: ElementSelector) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name == "${text}" OR value == "${text}"\`]`;
	} else {
		throw new Error('Unknown name selector strategy');
	}
}
