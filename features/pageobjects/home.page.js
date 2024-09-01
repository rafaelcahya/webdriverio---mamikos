import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    openHomepage(){
		return super.open('')
	}
}

export default new HomePage();