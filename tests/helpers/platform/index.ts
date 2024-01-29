import WebView, { CONTEXT_REF } from '../webview.ts';

export * from './android.ts';
export * from './ios.ts';

export const elementTypes = {
	BUTTON: isIOS() ? 'XCUIElementTypeButton' : '',
	IMAGE: isIOS() ? 'XCUIElementTypeImage' : '',
	TEXT: isIOS() ? 'XCUIElementTypeStaticText' : '',
	TEXTAREA: isIOS() ? 'XCUIElementTypeTextView' : '',
	OTHER: isIOS() ? 'XCUIElementTypeOther' : ''
};

export async function waitForLoad() {
	if (isWeb()) {
		return Promise.resolve();
	}
	return WebView.waitForWebsiteLoaded();
}

export async function switchToNative() {
	if (isWeb()) {
		return Promise.resolve();
	}

	return WebView.switchToContext(CONTEXT_REF.NATIVE);
}

export async function switchToWeb() {
	if (isWeb()) {
		return Promise.resolve();
	}

	return WebView.switchToContext(CONTEXT_REF.WEBVIEW);
}

export async function switchToIdentity() {
	if (isWeb()) {
		return Promise.resolve();
	}

	return WebView.switchToContext(CONTEXT_REF.IDENTITY);
}

export async function getContexts() {
	if (isWeb()) {
		return Promise.resolve(['WEBVIEW']);
	}

	return driver.getContexts();
}

export function getContext() {
	if (isWeb()) {
		return Promise.resolve('WEBVIEW');
	}

	return driver.getContext();
}

export async function url(newUrl: string) {
	const currentUrl = await browser.getUrl();

	if (newUrl[0] === '/') {
		// Simulate baseUrl by grabbing the current url and navigating relative
		// to that
		try {
			const fullUrl = new URL(newUrl, currentUrl);
			return browser.url(fullUrl.href);
		} catch (e) {
			throw new Error(e);
		}
	}

	return browser.url(newUrl);
}

export function pause(ms: number) {
	return driver.pause(ms);
}

export async function dismissKeyboard() {
	// TODO: Determine how to reliably dismiss OS keyboard
	await pause(5000);
	await driver.waitUntil(
		async () => {
			console.log(await driver.isKeyboardShown());
			return (await driver.isKeyboardShown()) === true;
		},
		{
			timeout: 5000,
			interval: 100
		}
	);
	await driver.hideKeyboard('pressKey', 'Done');
}

export function onWeb(fn: () => Promise<void>) {
	if (isWeb()) {
		return fn();
	}
}

export function onIOS(fn: () => Promise<void>) {
	if (isIOS()) {
		return fn();
	}
}
export function onAndroid(fn: () => Promise<void>) {
	if (isAndroid()) {
		return fn();
	}
}

export function isIOS() {
	return driver.isIOS;
}

export function isAndroid() {
	return driver.isAndroid;
}

export function isWeb() {
	return !driver.isMobile;
}

export async function setLocation(lat: number, lng: number) {
	if (isWeb()) {
		// Not available on web
		return Promise.resolve();
	}

	return driver.setGeoLocation({
		latitude: '' + lat,
		longitude: '' + lng,
		altitude: '94.23'
	});
}

export async function restartApp(urlPath: string) {
	// this is needed to set the "default" url on web so the DB can be cleared
	if (isWeb()) {
		return url(urlPath);
	}
}
