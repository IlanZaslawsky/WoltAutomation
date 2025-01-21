const { test, expect } = require('@playwright/test');
const SearchComponent = require('../components/SearchComponent');
const FiltersComponent = require('../components/FiltersComponent');
const ProductLineComponent = require('../components/ProductLineComponent');

test.describe('Common User Journey', () => {
    let search;
    let filters;
    let productLine;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://wolt.com/en/discovery');
        search = new SearchComponent(page);
        filters = new FiltersComponent(page);
        productLine = new ProductLineComponent(page);
    });

    test('Should Be Able To Find Resturants Using Search', async () => {
        await search.search('pizza');
        const resultCount = await search.getResultCount();

        expect(resultCount).toBeGreaterThan(0);
    });

    test('Should Be Able to Choose Product Line', async () => {
        const initialCount = await search.getResultCount();
        await productLine.selectProductLine('Restaurants');
        const filteredCount = await search.getResultCount();

        expect(filteredCount).toBeGreaterThan(initialCount);
    });

    test('Should Be Able To Choose ProductLine And Filter', async () => {
        await productLine.selectProductLine('Groceries');
        await filters.openFilterModal();
        await filters.selectSortBy('delivery-price');
        await filters.closeFilterModal();
        const resultCount = await search.getResultCount();

        expect(resultCount).toBeGreaterThan(0);
    });
});
