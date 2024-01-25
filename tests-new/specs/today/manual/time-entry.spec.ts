import { employeesByType } from '../../../helpers/users.ts';
import {
	Footer,
	FullModal,
	Keypad,
	Login,
	Profile,
	TimeCards,
	Today,
} from '../../../pageobjects/pages.ts';

describe('Manual Time Entries', () => {
	Object.values(employeesByType.Manual.Hourly).forEach((employee) => {
		it(`Should be able to enter regular hours and other hours to time card as a ${employee.username}`, async () => {
			await Login.clickUserLogin(employee);

			await Today.clickSetTimeInButton();
			await Today.clickAmTimePeriod();
			await Today.clickSaveButton();

			await Today.clickSetTimeOutButton();
			await Today.clickPmTimePeriod();
			await Today.clickSaveButton();

			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});
	});

	Object.values(employeesByType.Manual.Salary).forEach((employee) => {
		it.only(`Should be able to enter regular hours and other hours to time card as a ${employee.username}`, async () => {
			await Login.clickUserLogin(employee);

			await Today.clickAddTodaysHoursButton();
			await FullModal.clickRegularHoursInput();
			await FullModal.enterRegularHours('8');
			await Keypad.clickDoneButton();
			await FullModal.clickDoneButton();

			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});
	});
});
