const config: WebdriverIO.Config = {
	specs: ['../../tests/specs/**/*.spec.ts'],
	maxInstances: 2,
	logLevel: 'error',
	bail: 0,
	baseUrl: '',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	capabilities: [],
	framework: 'mocha',
	reporters: [
		[
			'spec',
			{
				realTimeReporting: true
			}
		]
	],
	mochaOpts: {
		retries: 1,
		ui: 'bdd',
		timeout: 180000
	}
};

export { config };
