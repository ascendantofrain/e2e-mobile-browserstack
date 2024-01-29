export function findElementByTextEqualsAndroid(text: string) {
	if (text) {
		return `android=new UiSelector().text("${text}")`;
	} else {
		throw new Error('Unknown text equals selector strategy');
	}
}

export function findElementByTextContainsAndroid(text: string) {
	if (text) {
		return `android=new UiSelector().textContains("${text}")`;
	} else {
		throw new Error('Unknown text contains selector strategy');
	}
}

export function findElementByTypeAndroid(type: string) {
	if (type) {
		//return `//${type}`;
	} else {
		throw new Error('Unknown element type selector strategy');
	}
}
