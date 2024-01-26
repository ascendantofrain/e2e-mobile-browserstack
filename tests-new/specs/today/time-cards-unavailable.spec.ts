import { employeesByType } from '../../helpers/users.ts';
import {
	Footer,
	Login,
	Profile,
	Today
} from '../../pageobjects/pages.ts';

describe(`Login for ${employeesByType.NoTimeCardEntryType}`, () => {
	before(async () => {
		await Login.clickUserLogin(employeesByType.NoTimeCardEntryType);
	});

	after(async () => {
		await Footer.clickProfileTabButton();
		await Profile.clickLogoutButton();
	});

	it('Should display warning that time cards are currently unavailable', async () => {
		await Today.verifyTimeCardCurrentlyUnavailableWarning()
		await Footer.timeCardsTabShouldBeDisabled()
	});
});
