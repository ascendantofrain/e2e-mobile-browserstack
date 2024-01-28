import { config } from './wdio.shared.appium.config.ts';

config.maxInstances = 1;
config.capabilities = [
	{
		maxInstances: 1,
		'appium:platformName': 'iOS',
		'appium:automationName': 'XCUITest',
		'appium:orientation': 'PORTRAIT',
		// 'appium:newCommandTimeout': 240,
		// 'appium:autoWebview': true,
		// 'appium:fullContextList': true,
		// 'appium:webviewConnectTimeout': 5000,

		// For Local testing against a real device
		'appium:bundleId': 'com.patriotsoftware.mobile.mypatriot',
		'appium:xcodeSigningId': 'iPhone Developer',
		'appium:xcodeOrgId': 'NNFA6HSA7U',
		'appium:udid': '00008130-001C39283C20001C',
	},
];

export { config };
