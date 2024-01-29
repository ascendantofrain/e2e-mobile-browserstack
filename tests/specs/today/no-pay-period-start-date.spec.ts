import { EmployeeWithNoFirstPayPeriodStartDate } from '../../helpers/users.ts';
import { Alert, Footer, Login, Profile } from '../../pageobjects/pages.ts';

// Handling this situation isn't developed yet.
xdescribe(`Login for ${EmployeeWithNoFirstPayPeriodStartDate.username}`, () => {
	before(async () => {
		await Login.clickUserLogin(EmployeeWithNoFirstPayPeriodStartDate);
	});

	after(async () => {
		await Footer.clickProfileTabButton();
		await Alert.clickOkButton();
		await Profile.clickLogoutButton();
	});

	it('Should display warning and disallow ape usage', async () => {
		await Alert.shouldHaveWarningMessage(
			'No employee was found with the supplied parameters'
		);
		await Alert.clickOkButton();
	});
});
