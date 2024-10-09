import {Component} from "./component";

export class MainInfoComponent extends Component {

    private readonly header = 'h1[class*="docTitle"]';

    constructor(selector: string = 'div[class^="docItemContainer"]') {
        super(selector);
    }

    get headerText(): string {
        return this.childElement(this.header).getText().trim();
    }
}