import { employeesByType } from '../../../helpers/users.ts';

describe('Manual Time Entries', () => {
	Object.values(employeesByType.Manual.Hourly).forEach((employee) => {
		it(`Should be able to enter regular hours and other hours to time card as a ${employee.username}`, async () => {
			// await Login.clickUserLogin(employee.username);
			// await Footer.clickProfileTabButton();
			// await Profile.clickLogoutButton();
		});
	});
});
