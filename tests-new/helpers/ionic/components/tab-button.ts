import { Ionic$ } from '../index.ts';
import { ElementActionOptions } from '../../index.ts';
import { IonicComponent } from './component.ts';

export interface TapTabButtonOptions extends ElementActionOptions {
}

export class IonicTabButton extends IonicComponent {
  constructor(selector: string) {
    super(selector);
  }

  static withTitle(buttonTitle: string): IonicTabButton {
    return new IonicTabButton(`ion-tab-button=${buttonTitle}`);
  }

  async tap({
    visibilityTimeout = 5000,
  }: TapTabButtonOptions = {}) {
    const button = await Ionic$.$(this.selector as string);
    await button.waitForDisplayed({ timeout: visibilityTimeout });
    return button.click();
  }
}
