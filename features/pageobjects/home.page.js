import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
	get homepage () {
		return $('#home');
	}
	
    get searchBtn () {
        return $('.btn-cta-search');
    }
	
	get flashsaleContainer(){
		return $('#flashsale')
	}

	get previousBtn(){
		return $('.flashsale-right div[aria-label="Previous slide"]')
	}

	get nextBtn(){
		return $('.flashsale-right div[aria-label="Next slide"]')
	}
	
	get flashsaleProduct(){
		return $('.flashsale-wrapper')
	}

    openHomepage(){
		return super.open('')
	}
}

export default new HomePage();