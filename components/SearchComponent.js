const ComponentBase = require('../models/ComponentBase');

class SearchComponent extends ComponentBase {
    constructor(page) {
        super(page);
        this.selectors = {
            input: '[data-test-id="SearchInput"]',
            results: '[data-test-id="VenueVerticalListGrid"]',
        };
    }

    async search(term) {
        const searchInput = this.page.locator(this.selectors.input);
        await searchInput.click();
        await searchInput.fill(term);
        await searchInput.press('Enter');
        await this.waitFor(this.selectors.results); 
    }

    async getResultCount() {
        return this.page.evaluate((selector) => {
            return document.querySelectorAll(selector).length;
        }, this.selectors.results);
    }
}

module.exports = SearchComponent;
