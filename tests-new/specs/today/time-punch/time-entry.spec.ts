import { timePunchEmployees } from '../../../helpers/users.ts';
import {
	Footer,
	Login,
	Profile,
	TimeCards,
	Today,
} from '../../../pageobjects/pages.ts';

timePunchEmployees.forEach((employee) => {
	describe(`Time Punch entries for ${employee.username}`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickTimeCardsTabButton();
			await TimeCards.resetTimeCardHours();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it('Should be able to Set Time In and Set Time Out hours to time card', async () => {
			await Today.clickPunchInButton();
			await Today.verifyPunchedInTimeDisplay();
			await Today.verifyPendingTimeDisplay();
			await Today.clickPunchOutButton();
			await Today.verifyInOutTimeDisplay();
		});
	});
});
