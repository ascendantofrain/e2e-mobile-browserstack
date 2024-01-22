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
  capabilities : [
  {
    platformName: 'iOS',
    maxInstances: 1,
    'appium:deviceName': 'iPhone 15 Pro',
    'appium:platformVersion': '17.2',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'XCUITest',
    'appium:app': '/Users/averheyen/Library/Developer/Xcode/DerivedData/App-emplllluoflwvteqdetszkejqctk/Build/Products/Debug-iphonesimulator/My Patriot.app',
    'appium:newCommandTimeout': 240,
    'appium:autoWebview': true,
    'appium:noReset': true,
    'appium:fullContextList': true
    }],
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
  services: [[
    "appium",
    {
      // This will use the globally installed version of Appium
      command: "appium",
      args: {
        // This is needed to tell Appium that we can execute local ADB commands
        // and to automatically download the latest version of ChromeDriver
        relaxedSecurity: true,
        // Only log Appium logs in verbose mode
        ...(process.env.VERBOSE === "true" ? { log: "./appium.log" } : {}),
      }
    }
  ]],
  specs: ['/Users/averheyen/source/repos/e2e-mobile-browserstack/tests-new/specs/app.login-qa.spec.ts'],
  waitforTimeout: 45000,
};