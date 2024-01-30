import { config } from './wdio.browserstack.config.ts';

config.services = [
	'appium',
	[
		'browserstack',
		{
			app: 'bs://e9caca472f6c5764accec2b278c0dc6db62d3588',
			browserstackLocal: false,
			parallelsPerPlatform: 2
		}
	]
];
config.capabilities = [
	{
		'bstack:options': {
			buildName: 'v0.8.1- Build ios-4/android-37',
			buildIdentifier: 'Build #${BUILD_NUMBER}',
			projectName: 'MyPatriot Mobile Time Tracker',
			deviceName: 'iPhone 14 Pro Max',
			platformVersion: '16',
			platformName: 'ios',
			debug: true,
			networkLogs: true
		}
	}
];

export { config };
