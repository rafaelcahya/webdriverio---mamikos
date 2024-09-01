import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */

    get searchModal () {
        return $('div[data-testid="search-box-modal"]');
    }

    get backBtn () {
        return $('div[data-testid="form-group-img"]');
    }

    get searchField(){
        return $('input[type="search"]')
    }

    get clearBtn(){
        return $('a[data-testid="field-reset"]')
    }

    get suggestionBox(){
        return $('#suggestionsBox')
    }

    get suggestionBoxAreaContainer(){
        return $('div[data-testid="suggestionsBox-areaList"]')
    }

    get suggestionBoxArea(){
        return $('div[data-testid="suggestionsBox-areaList"] a[data-testid="results-list__item"]')
    }

    get suggestionBoxSearchResultContainer(){
        return $('div[data-testid="search-box-modal__results"]')
    }

    get suggestionBoxSearchResult(){
        return $('div[data-testid="search-box-modal__results"] a[data-testid="results-list__item"]')
    }

    get suggestionBoxRoomListContainer(){
        return $('div[data-testid="suggestionBox-roomList"]')
    }
    
    get suggestionBoxRoomList(){
        return $('div[data-testid="suggestionBox-roomList"] a[data-testid="results-list__item"]')
    }

    get searchContent(){
        return $('.content')
    }

    get seeMoreBtn(){
        return $('.btn-see-more')
    }

    get areaListPage(){
        return $('.area')
    }

    get landingPage(){
        return $('.landing-container')
    }

    get detailsRoomPage(){
        return $('.detail')
    }
}

export default new SearchPage();
