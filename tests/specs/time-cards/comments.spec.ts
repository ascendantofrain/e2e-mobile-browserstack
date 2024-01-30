import { allEmployees } from '../../helpers/users.ts';
import { Comments, Footer, Login, Profile } from '../../pageobjects/pages.ts';

const comment = `This is a test comment via WebDriver.io test automation on ${new Date().toISOString()}`;

allEmployees.forEach((employee) => {
	describe(`Time Card comments`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it(`Should be able to add a comment to the current time card  for ${employee.username}`, async () => {
			await Footer.clickTimeCardsTabButton();
			await Comments.clickCommentsButton();
			await Comments.typeComment(comment);
			await Comments.saveComment();
			await Comments.closeCommentsModal();
		});
	});
});
