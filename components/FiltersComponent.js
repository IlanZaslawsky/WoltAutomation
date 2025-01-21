const ComponentBase = require('../models/ComponentBase');

class FiltersComponent extends ComponentBase {
    constructor(page) {
        super(page);
        this.selectors = {
            sortingButton: '[data-test-id="sorting.button"]',
            sortByButton: '[data-test-id="sortOptions.',
            applyButton: '[data-test-id="closeFilterButton"]'
        };
    }

    async openFilterModal() {
        const sortingButton = this.page.locator(this.selectors.sortingButton);
        await sortingButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async selectSortBy(name) {
        await this.page
            .locator(`${this.selectors.sortByButton}${name}.label"]`) // Can sort by 'distance', 'rating', 'delivery-price', 'delivery_estimate' and 'recommended'
            .click();
        await this.page.waitForLoadState('networkidle');
    }

    async closeFilterModal() {
        const applyButton = this.page.locator(this.selectors.applyButton);
        await applyButton.click();
    }
}

module.exports = FiltersComponent;
