
export function parseArgs(args) {
    this.headless = false;
    this.target = 'local';

    this.environment = 'https://webdriver.io';

    if (args !== undefined && args.length) {
        args.forEach((arg) => {
            if (arg.indexOf('--headless') !== -1) {
                this.headless = true;
            }
            if (arg.indexOf('--target=') !== -1) {
                this.target = arg.replace('--target=', '');
                switch (this.target) {
                    case 'dev':
                        this.environment = 'https://webdriver.io';
                        break;
                    case 'test':
                        this.environment = 'another env';
                        break;
                }
            }
        });
    }
    return {
        headless: this.headless,
        environment: this.environment,
    };
}