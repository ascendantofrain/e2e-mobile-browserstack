import { ElementSelector } from '../definitions';

export function findElementAndroidTextEquals({ text }: ElementSelector) {
	if (text) {
		return $(`android=new UiSelector().text("${text}")`);
	} else {
		throw new Error('Unknown selector strategy');
	}
}

export function findElementAndroidTextContains({ text }: ElementSelector) {
	if (text) {
		return $(`android=new UiSelector().textContains("${text}")`);
	} else {
		throw new Error('Unknown selector strategy');
	}
}

export function findElementAndroidName({ text }: ElementSelector) {
	if (text) {
		return $(`android=new UiSelector().name("${text}")`);
	} else {
		throw new Error('Unknown selector strategy');
	}
}
