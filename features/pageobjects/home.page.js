import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
	get homepage () {
		return $('#home');
	}
	
    get searchBtn () {
        return $('.btn-cta-search');
    }

    openHomepage(){
		return super.open('')
	}
}

export default new HomePage();