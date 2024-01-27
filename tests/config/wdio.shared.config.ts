const config: WebdriverIO.Config = {
	specs: ['../../tests/specs/**/*.spec.ts'],
	maxInstances: 2,
	logLevel: 'info',
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
				onlyFailures: true,
				realTimeReporting: true,
			},
		],
	],
	mochaOpts: {
		ui: 'bdd',
		timeout: 180000,
	},
	services: [
		[
			'appium',
			{
				// This will use the globally installed version of Appium
				command: 'appium',
				args: {
					// This is needed to tell Appium that we can execute local ADB commands
					// and to automatically download the latest version of ChromeDriver
					relaxedSecurity: true,
					// Only log Appium logs in verbose mode
					...(process.env.VERBOSE === 'true'
						? { log: './appium.log' }
						: {}),
				},
			},
		],
	],
};

export { config };
