import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginModal extends Page {
    /**
     * define selectors using getter methods
     */

    get loginModalContainer() {
        return $("#loginModal");
    }

    get pencariKosOption() {
        return $('div[data-testid="pencariKosButton"]');
    }

	get pemilikKosOption() {
		return $('div[data-testid="pemilikKosButton"]');
	}

    get phoneNumberInputField() {
        return $('input[data-testid="phoneNumberTextbox"]');
    }

    get emptyPhoneNumberErrorMsg() {
        return $('//p[text()="Nomor Handphone harus diisi."]');
    }

    get invalidPhoneNumberErrorMsg() {
        return $('//p[text()="Format Nomor Handphone salah."]');
    }

    get passwordInputField() {
        return $('input[data-testid="passwordTextbox"]');
    }

    get emptyPasswordErrorMsg() {
        return $('//p[text()="Password harus diisi."]');
    }

    get limitPasswordErrorMsgCustomer() {
        return $('//p[text()="Password minimal mengandung 8 karakter."]');
    }

    get limitPasswordErrorMsgOwner() {
        return $('//p[text()="Password minimal mengandung 6 karakter."]');
    }

    get loginButton() {
        return $('button[data-testid="loginButton"]');
    }

    get invalidCredErrorMsg() {
        return $('//p[text()="Nomor dan password tidak sesuai"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

export default new LoginModal();
