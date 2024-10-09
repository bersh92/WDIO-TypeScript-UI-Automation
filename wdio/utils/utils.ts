export abstract class Utils {

    public static getTabUrl(url: string): string {
        browser.waitUntil(() => {
            try {
                browser.switchWindow(url); // Switches to the window based on URL or title
                const state = browser.execute(() => document.readyState);
                return state === 'complete';
            } catch (e) {
                return false; // Return false to keep waiting until it finds the window
            }
        }, {
            timeout: 5000,
            timeoutMsg: `No tab found with the exact URL: ${url} within the given time`
        });

        return browser.getUrl(); // Return the URL of the current active window after switching
    }
}