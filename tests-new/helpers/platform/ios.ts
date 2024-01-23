import { ElementSelector } from '../definitions';

function findElementIosTextEquals({ text }: ElementSelector) {
	if (text) {
		return $(
			`-ios class chain:**/XCUIElementTypeAny[\`label == "${text}" OR value == "${text}"\`]`,
		);
	} else {
		throw new Error('Unknown selector strategy');
	}
}

function findElementIosTextContains({ text }: ElementSelector) {
	if (text) {
		return $(
			`-ios class chain:**/XCUIElementTypeAny[\`label CONTAINS[c] "${text}" OR value CONTAINS[c] "${text}"\`]`,
		);
	} else {
		throw new Error('Unknown selector strategy');
	}
}

function findElementIosName({ text }: ElementSelector) {
	if (text) {
		return $(
			`-ios class chain:**/XCUIElementTypeAny[\`name == "${text}" OR value == "${text}"\`]`,
		);
	}
}

export {
	findElementIosName,
	findElementIosTextContains,
	findElementIosTextEquals,
};
