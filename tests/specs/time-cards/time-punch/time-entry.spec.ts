import { timePunchEmployees } from '../../../helpers/users.ts';
import {
	Alert,
	Footer,
	FullModal,
	Login,
	Profile,
	TimeCards,
	Today
} from '../../../pageobjects/pages.ts';

timePunchEmployees.forEach((employee) => {
	describe(`Time Punch entries`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it(`Should be able to Set Time In and Set Time Out hours to time card  for ${employee.username}`, async () => {
			await Today.clickPunchInButton();
			await Today.verifyPunchedInTimeDisplay();
			await Today.verifyPendingTimeDisplay();
			await Today.clickPunchOutButton();
			await Today.verifyInOutTimeDisplay();
		});

		it(`Should be able to submit time and unsubmit card  for ${employee.username}`, async () => {
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
