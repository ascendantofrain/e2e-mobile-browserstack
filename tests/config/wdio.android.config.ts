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
			platformName: 'Android',
			maxInstances: 1,
			'appium:deviceName': 'Pixel 7 Pro',
			'appium:platformVersion': '13',
			'appium:orientation': 'PORTRAIT',
			'appium:automationName': 'UiAutomator2',
			'appium:app':
				'/Users/averheyen/source/repos/PatriotSoftware.Mobile.MyPatriot/android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
			'appium:appWaitActivity':
				'com.ionicframework.conferenceapp.MainActivity',
			// 'appium:newCommandTimeout': 240,
			// 'appium:autoWebview': true,
			// 'appium:noReset': true,
			// 'appium:dontStopAppOnReset': true,
			// 'appium:webviewConnectTimeout': 5000,
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
	specs: ['../../tests/specs/**/*.spec.ts'],
	waitforTimeout: 45000,
};
