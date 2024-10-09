import {AttributeType, Component} from "./component";

export class BottomMenu extends Component {

    private readonly listOfSubMenuItems = 'li[class="footer__item"] a';

    constructor(selector: string = 'footer[class*="footer footer--dark"]') {
        super(selector);
    }

    get listOfBottomMenu(): string[] {
        return this.childElementsTexts(this.listOfSubMenuItems);
    }

    clickOnSectionItem(sectionItem: string): void {
        this.findElementAndClick(this.listOfSubMenuItems, AttributeType.text, sectionItem);
    }
}