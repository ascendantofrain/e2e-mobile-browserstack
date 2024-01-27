import { config } from './wdio.browserstack.config.ts';

config.services = [
	'appium',
	[
		'browserstack',
		{
			app: 'bs://68c292cc15f36f5e6e5db89d3c6319cb2cf71be4',
			buildIdentifier: '${BUILD_NUMBER}',
			browserstackLocal: false,
		},
	],
];
config.capabilities = [
	{
		'bstack:options': {
			networkLogs: true,
			deviceName: 'iPhone 14 Pro Max',
			platformVersion: '16',
			platformName: 'ios',
			timezone: 'New_York',
		},
	},
	{
		'bstack:options': {
			networkLogs: true,
			deviceName: 'iPhone SE 2020',
			platformVersion: '16.4',
			platformName: 'ios',
			timezone: 'New_York',
		},
	},
];

export { config };
