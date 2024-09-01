import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Navbar extends Page {
    /**
     * define selectors using getter methods
     */

    get navMainContainer() {
        return $(".nav-main-container");
    }

    get logo(){
        return $(".nav-brand-img")
    }

    get productButton(){
        return $("//a[contains(text(), 'Cari Apa?')]")
    }

    get pusatBantuanButton(){
        return $("//a[contains(text(), 'Pusat Bantuan')]")
    }

    get syaratDanKetentuanButton(){
        return $("//a[contains(text(), 'Syarat dan Ketentuan')]")
    }

    get navLoginButton(){
        return $(".nav-login-button")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
}

export default new Navbar();
