export const config = {
	user: process.env.BROWSERSTACK_USERNAME || 'adamverheyen3',
	key: process.env.BROWSERSTACK_ACCESS_KEY || 'aDYjbnkyCAqS6sjfkcsp',
	specs: [
		'/Users/averheyen/source/repos/e2e-mobile-browserstack/tests-new/specs/app.login-qa.spec.ts',
	],
	exclude: [],
	hostname: 'hub.browserstack.com',
	services: [
		[
			'browserstack',
			{
				app: 'bs://68c292cc15f36f5e6e5db89d3c6319cb2cf71be4',
				browserstackLocal: true,
			},
		],
	],
	capabilities: [
		{
			'bstack:options': {
				deviceName: 'iPhone 14 Pro Max',
				platformVersion: '16',
				platformName: 'ios',
			},
		},
	],
	commonCapabilities: {
		'bstack:options': {
			projectName: 'My Patriot App',
			debug: true,
			networkLogs: true,
		},
	},
	maxInstances: 10,
};
