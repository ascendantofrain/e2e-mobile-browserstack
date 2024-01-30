export function findElementTextEqualsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`label == "${text}" OR value == "${text}"\`]`;
	} else {
		throw new Error('Unknown text equals selector strategy');
	}
}

export function findElementTextContainsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`label CONTAINS[c] "${text}" OR value CONTAINS[c] "${text}"\`]`;
	} else {
		throw new Error('Unknown text contains selector strategy');
	}
}

export function findElementNameEqualsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name == "${text}" OR value == "${text}"\`]`;
	} else {
		throw new Error('Unknown name selector strategy');
	}
}

export function findElementNameContainsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name CONTAINS[c] "${text}" OR value CONTAINS[c] "${text}"\`]`;
	} else {
		throw new Error('Unknown name contains selector strategy');
	}
}

export function findElementNameBeginsWithAndEndsWithIos(
	beginsWith: string,
	endsWith: string
) {
	if (beginsWith && endsWith) {
		return `-ios class chain:**/XCUIElementTypeAny[\`name BEGINSWITH[c] "${beginsWith}" AND name ENDSWITH[c] "${endsWith}"\`]`;
	} else {
		throw new Error(
			'Unknown name begins with and ends with contains selector strategy'
		);
	}
}

export function findElementValueEqualsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`value == "${text}"\`]`;
	} else {
		throw new Error('Unknown value selector strategy');
	}
}

export function findElementValueContainsIos(text: string) {
	if (text) {
		return `-ios class chain:**/XCUIElementTypeAny[\`value CONTAINS[c] "${text}"\`]`;
	} else {
		throw new Error('Unknown value contains selector strategy');
	}
}

export function findElementByTypeOrXPathIos(type: string) {
	if (type) {
		return `${type}`;
	} else {
		throw new Error('Unknown element type or XPath selector strategy');
	}
}
