import {
	regularTimeEntryEmployees,
	setTimeInTimeOutEmployees,
} from '../../../helpers/users.ts';
import {
	Footer,
	FullModal,
	Keypad,
	Login,
	Profile,
	TimeCards,
	Today,
} from '../../../pageobjects/pages.ts';

setTimeInTimeOutEmployees.forEach((employee) => {
	describe(`Set Time In and Time Out for ${employee.username}`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it('Should be able to set time in and set time out hours to time card', async () => {
			await Today.clickSetTimeInButton();
			await Today.clickAmTimePeriod();
			await Today.clickSaveButton();

			await Today.clickSetTimeOutButton();
			await Today.clickPmTimePeriod();
			await Today.clickSaveButton();
		});
	});
});

regularTimeEntryEmployees.forEach((employee) => {
	describe(`Manual Time Entry Input for ${employee.username}`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it('Should be able to enter regular hours and other hours to time card', async () => {
			await Today.clickEnterTodaysHoursButton();
			await FullModal.enterRegularHours('8');
			await Keypad.clickDoneButton();
			await FullModal.clickDoneButton();
		});
	});
});
