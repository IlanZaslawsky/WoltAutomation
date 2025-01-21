class ComponentBase {
    constructor(page) {
        this.page = page;
    }

    async waitFor(selector, options = {}) {
        const defaultOptions = {
            state: 'visible',
            timeout: 10000
        };
        return this.page.locator(selector).waitFor({ ...defaultOptions, ...options });
    }
}

module.exports = ComponentBase;