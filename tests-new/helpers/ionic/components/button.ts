import { ElementActionOptions } from '../../index.ts';
import { findElementTextEquals } from '../../platform/webdriver-actions.ts';
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
		findElementTextEquals(buttonTitle);
	}
}
