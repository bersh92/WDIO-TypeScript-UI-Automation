import {AttributeType, Component} from "./component";

export class SearchPopUpComponent extends Component {

    private readonly searchHeader = 'input[class="DocSearch-Input"]';
    private readonly listOfSearchResults = 'span[class="DocSearch-Hit-title"]';

    constructor(selector: string = 'div[class="DocSearch-Modal"]') {
        super(selector);
    }

    findAndOpenTheSearchResult(value: string): void {
        this.childElement(this.searchHeader).click();
        this.childElement(this.searchHeader).setValue(value);
        browser.pause(1000);
        this.findElementAndClick(this.listOfSearchResults, AttributeType.text, value);
    }
}