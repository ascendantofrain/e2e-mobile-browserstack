import { config } from './wdio.browserstack.config.ts';

config.services = [
	'appium',
	[
		'browserstack',
		{
			app: '',
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
			deviceName: 'Google Pixel 7 Pro',
			platformVersion: '13.0',
			platformName: 'Android',
			debug: true,
			networkLogs: true
		}
	}
];

export { config };
