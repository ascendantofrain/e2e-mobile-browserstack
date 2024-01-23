import {
	ElementActionOptions,
	findElementAndroidTextEquals,
	findElementIosTextEquals,
	isAndroid,
	isIOS,
} from '../../index.ts';
import { IonicComponent } from './component.ts';

export interface TapButtonOptions extends ElementActionOptions {
	/**
	 * Whether to scroll the element into view first. Default: true
	 */
	scroll?: boolean;
}

export class IonicButton extends IonicComponent {
	constructor(selector: string) {
		super(selector);
	}

	static withTitle(buttonTitle: string) {
		if (isIOS()) {
			return findElementIosTextEquals({ text: buttonTitle });
		}
		if (isAndroid()) {
			return findElementAndroidTextEquals({ text: buttonTitle });
		}
	}
}
