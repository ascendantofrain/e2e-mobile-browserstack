import { allEmployees } from '../../helpers/users.ts';
import { Comments, Footer, Login, Profile } from '../../pageobjects/pages.ts';

const comment = `Employee Comments - This is a test`;

allEmployees.forEach((employee) => {
	describe(`Time Card comments for ${employee.username}`, () => {
		before(async () => {
			await Login.clickUserLogin(employee);
		});

		after(async () => {
			await Comments.clickCommentsButton();
			await Comments.clearComment(comment);
			await Comments.saveComment();
			await Comments.closeCommentsModal();

			await Footer.clickProfileTabButton();
			await Profile.clickLogoutButton();
		});

		it('Should be able to add a comment to the current time card', async () => {
			await Footer.clickTimeCardsTabButton();
			await Comments.clickCommentsButton();
			await Comments.typeComment(comment);
			await Comments.saveComment();
			await Comments.closeCommentsModal();
		});
	});
});
