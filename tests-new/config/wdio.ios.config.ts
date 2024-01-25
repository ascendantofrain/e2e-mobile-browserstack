/**
 * All not needed configurations, for this boilerplate, are removed.
 * If you want to know which configuration options you have then you can
 * check https://webdriver.io/docs/configurationfile
 */
export const config: WebdriverIO.Config = {
	autoCompileOpts: {
		autoCompile: true,
		tsNodeOpts: {
			transpileOnly: true,
		},
	},
	bail: 0,
	baseUrl: process.env.SERVE_PORT
		? `http://localhost:${process.env.SERVE_PORT}`
		: 'http://localhost:8080',
	capabilities: [
		{
			maxInstances: 1,
			'appium:platformName': 'iOS',
			'appium:automationName': 'XCUITest',

			// 'appium:deviceName': 'Adam iPhone',
			// 'appium:platformVersion': '17.3',
			// 'appium:orientation': 'PORTRAIT',
			// 'appium:newCommandTimeout': 240,
			// 'appium:autoWebview': true,
			// 'appium:fullContextList': true,
			// 'appium:webviewConnectTimeout': 5000,
			// For Local testing against simulated device
			//'appium:app':
			//	'/Users/averheyen/Library/Developer/Xcode/DerivedData/App-emplllluoflwvteqdetszkejqctk/Build/Products/Debug-iphonesimulator/My Patriot QA.app',

			// For Local testing against a real device
			'appium:bundleId': 'com.patriotsoftware.mobile.mypatriot',
			'appium:xcodeSigningId': 'iPhone Developer',
			'appium:xcodeOrgId': 'NNFA6HSA7U',
			'appium:udid': '00008130-001C39283C20001C',
		},
	],
	connectionRetryCount: 3,
	connectionRetryTimeout: 120000,
	framework: 'mocha',
	logLevel: process.env.VERBOSE === 'true' ? 'debug' : 'error',
	mochaOpts: {
		timeout: 1200000,
	},
	reporters: ['spec'],
	runner: 'local',
	port: 4723,
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
	specs: [
		'/Users/averheyen/source/repos/e2e-mobile-browserstack/tests-new/specs/timecards/manual/time-entry.spec.ts',
	],
	waitforTimeout: 45000,
};
