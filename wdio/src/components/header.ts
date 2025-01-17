import {Component} from "./component";

export class Header extends Component {

    private readonly docsLink = 'a=Docs';
    private readonly versionNumber = 'div[class*="items--right"] a[href="/versions"]';
    private readonly contributeButton = 'a=Contribute';
    private readonly searchField = '[class="DocSearch-Button-Container"]';
    private readonly apiLink = 'a=API';
    private readonly communityLink = 'a=Community';
    private readonly darkTheme = 'div[class*="react-toggle-thumb"]';
    private readonly dataTheme = 'html[data-theme]';

    constructor(selector: string = '.navbar.navbar--fixed-top') {
        super(selector);
    }

    get version(): string {
        return this.childElement(this.versionNumber).getText();
    }

    get themeText(): string {
        $(this.dataTheme).getAttribute("data-theme");
        return $(this.dataTheme).getAttribute("data-theme");
    }

    clickOnDocs(): void {
        this.childElement(this.docsLink).click();
    }

    clickOnDarkTheme(): void {
        this.childElement(this.darkTheme).click();
    }

    clickOnContribute(): void {
        this.childElement(this.contributeButton).click();
    }

    clickOnSearch(): void {
        this.childElement(this.searchField).click();
    }

    clickOnApi(): void {
        this.childElement(this.apiLink).click();
    }

    clickOnCommunity(): void {
        this.childElement(this.communityLink).click();
    }

    selectTheme(theme: string): void {
        if (this.themeText != theme) {
            this.clickOnDarkTheme();
        }
    }
}