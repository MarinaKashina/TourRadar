import { assert } from 'chai';

describe('Registration', function () {

    it('getWorks', function () {
        browser.url('https://www.tourradar.com/registration');
        $('//*[@id="g_name"]').setValue('Marina');
        $('//*[@id="g_email"]').setValue('testreacttestt@gmail.com');
        $('//*[@id="g_password_1"]').setValue('testTest123');
        $('//*[@id="g_password_2"]').setValue('testTest123');
        $('//*[@id="g_send"]/span').click();
        let myAccount = $('/html/body/main/nav/ul/li[2]/a');
        myAccount.waitForDisplayed(2000);
        assert.isTrue(myAccount.isDisplayed());
    })

});

