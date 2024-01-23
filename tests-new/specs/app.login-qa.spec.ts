import { allEmployees } from '../helpers/users.ts';
import Footer from '../pageobjects/footer.page.ts';
import Landing from '../pageobjects/landing.page.ts';
import Login from '../pageobjects/login.page.ts';
import Profile from '../pageobjects/profile.page.ts';

describe('Credentials check', () => {
	Object.values(allEmployees).forEach((employee) => {
		it(`Should bet able to login and logout using ${employee.username} user`, async () => {
			await Login.clickUserLogin(employee.username);
			await Landing.headerShouldContainUsername(employee.firstName);
			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});
	});
});
