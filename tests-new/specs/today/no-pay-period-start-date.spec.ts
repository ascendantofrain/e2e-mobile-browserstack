import { employeesByType } from '../../helpers/users.ts';
import {
    Alert,
    Footer,
    Login,
    Profile
} from '../../pageobjects/pages.ts';

describe(`Login for ${employeesByType.NoFirstPayPeriodStartDate}`, () => {
    before(async() => {
        await Login.clickUserLogin(employeesByType.NoFirstPayPeriodStartDate);
    });

    after(async() => {
        await Footer.clickProfileTabButton();
        await Alert.clickOkButton();
        await Profile.clickLogoutButton();
    });

    // Handling this situation isn't developed yet.
    xit('Should display warning and disallow ape usage', async() => {
        await Alert.shouldHaveWarningMessage('No employee was found with the supplied parameters')
        await Alert.clickOkButton();
    });
});