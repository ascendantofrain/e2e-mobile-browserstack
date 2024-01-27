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

export function findElementIosNameEquals({ text }: ElementSelector) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name == "${text}" OR value == "${text}"\`]`;
	} else {
		throw new Error('Unknown name selector strategy');
	}
}

export function findElementIosNameContains({ text }: ElementSelector) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name CONTAINS[c] "${text}" OR value CONTAINS[c] "${text}"\`]`;
	} else {
		throw new Error('Unknown name contains selector strategy');
	}
}

export function findElementIosTypeKey({ text }: ElementSelector) {
	if (text) {
		return `//XCUIElementTypeKey[@name="${text}"]`;
	} else {
		throw new Error('Unknown element type key strategy');
	}
}
