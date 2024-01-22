import Login from '../pageobjects/login.page.ts';
import Profile from '../pageobjects/profile.page.ts';
import Landing from '../pageobjects/landing.page.ts';
import webview, { CONTEXT_REF } from '../helpers/webview.ts';

describe('Login', () => {
  beforeEach(async () => {
    //await webview.switchToContext(CONTEXT_REF.WEBVIEW);
  });

  it('Should login and logout using Hourly-Biweekly_Manual QA user', async () => {
    await Login.clickUserLogin('SalaryNonExempt-Monthly_TimePunch');
    await Landing.headerShouldContainUsername('SalaryNonExempt-Monthly');
    await Profile.clickProfileTabButton();
    await Profile.clickLogoutButton();
  });
});
