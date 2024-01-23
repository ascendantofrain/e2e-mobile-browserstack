export const config: WebdriverIO.Config = {
	user: 'adamverheyen3',
	key: 'aDYjbnkyCAqS6sjfkcsp',
	hostname: 'hub.browserstack.com',

	specs: [
		'/Users/averheyen/source/repos/e2e-mobile-browserstack/tests-new/specs/app.login-qa.spec.ts',
	],

	services: [
		'appium',
		[
			'browserstack',
			{
				app: 'bs://68c292cc15f36f5e6e5db89d3c6319cb2cf71be4',
				buildIdentifier: '${BUILD_NUMBER}',
				browserstackLocal: false,
			},
		],
	],

	capabilities: [
		{
			'bstack:options': {
				networkLogs: true,
				deviceName: 'iPhone 14 Pro Max',
				platformVersion: '16',
				platformName: 'ios',
				timezone: 'New_York',
			},
		},
	],

	commonCapabilities: {
		'bstack:options': {
			projectName: 'My Patriot App',
			buildName: 'My Patriot App',
			debug: true,
			networkLogs: true,
		},
	},

	maxInstances: 2,
	logLevel: 'info',
	bail: 0,
	baseUrl: '',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,

	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 180000,
	},
};
