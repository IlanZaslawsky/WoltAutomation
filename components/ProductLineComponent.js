const ComponentBase = require("../models/ComponentBase");

class ProductLineComponent extends ComponentBase {
    constructor(page) {
        super(page)
        this.selectors = {
            productLine: '[data-test-id="ProductLine"]'
        };
    }
    async selectProductLine(product) {
        await this.page.locator(`${this.selectors.productLine}:has-text("${product}")`).click();
        await this.page.waitForLoadState('networkidle');
    };
}

module.exports = ProductLineComponent;