import {
	regularTimeEntryEmployees,
	setTimeInTimeOutEmployees
} from '../../../helpers/users.ts';
import {
	Alert,
	Footer,
	FullModal,
	Keypad,
	Login,
	Profile,
	TimeCards,
	Today
} from '../../../pageobjects/pages.ts';

setTimeInTimeOutEmployees.forEach((employee) => {
	describe(`Set Time In and Time Out`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it(`Should be able to set time in and set time out hours to time card for ${employee.username}`, async () => {
			await Today.clickSetTimeInButton();
			await Today.clickSaveButton();

			await Today.clickSetTimeOutButton();
			await Today.clickSaveButton();
		});

		it(`Should be able to submit time and unsubmit card for ${employee.username}`, async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.clickSubmitHoursButton();
			await FullModal.clickSubmitButton();
			await FullModal.verifyTimeCardSubmitted();
			await FullModal.clickGoToTimeCardsLink();
			await TimeCards.clickEditTimeCardButton();
			await Alert.clickUnsubmitButton();
		});
	});
});

regularTimeEntryEmployees.forEach((employee) => {
	describe(`Manual Time Entry Input`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it(`Should be able to enter regular hours and other hours to time card for ${employee.username}`, async () => {
			await Today.clickEnterTodaysHoursButton();
			await FullModal.enterRegularHours('8');
			await Keypad.clickDoneButton();
			await FullModal.clickDoneButton();
		});

		it(`Should be able to submit time and unsubmit card for ${employee.username}`, async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.clickSubmitHoursButton();
			await FullModal.clickSubmitButton();
			await FullModal.verifyTimeCardSubmitted();
			await FullModal.clickGoToTimeCardsLink();
			await TimeCards.clickEditTimeCardButton();
			await Alert.clickUnsubmitButton();
		});
	});
});
