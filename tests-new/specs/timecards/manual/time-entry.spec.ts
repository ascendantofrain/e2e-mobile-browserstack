import { employeesByType } from '../../../helpers/users.ts';
import {
	Footer,
	Login,
	Profile,
	TimeCards,
	Today,
} from '../../../pageobjects/pages.ts';

describe('Manual Time Entries', () => {
	afterEach(async () => {
		await Footer.clickTimeCardsTabButton();
		await TimeCards.resetTimeCardHours();

		await Footer.clickProfileTabButton();
		await Profile.clickLogoutButton();
	});

	it(`Should be able to enter regular hours and other hours to time card as a ${employeesByType.Manual.Hourly.Biweekly.username}`, async () => {
		await Login.clickUserLogin(employeesByType.Manual.Hourly.Biweekly);
		await Today.clickSetTimeInButton();
		await Today.clickAmTimePeriod();
		await Today.clickSaveButton();
		await Today.clickSetTimeOutButton();
		await Today.clickPmTimePeriod();
		await Today.clickSaveButton();
	});
});
