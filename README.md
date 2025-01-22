# WoltAutomation
## Infrastructure Design Philosophy

### 🎯 Component-Based Architecture
- Components represent reusable UI elements (search, filters, etc.)
- Easy to add new features by creating new components
- Changes to UI only need updates in one place
- Natural mapping to modern web applications

### 💪 Robust Test Execution
- Smart waiting strategy adapts to network conditions
- Browser-context evaluation for reliable element handling
- Focused test artifacts (traces, screenshots) only on failure
- Clear error messages with detailed context

### 📈 Easy to Scale
- Add new tests by composing existing components
- Extend functionality through the ComponentBase class
- Clear separation between test logic and component interactions
- Ready for CI/CD integration with HTML reporting

### 📝 Writing New Tests
```javascript
// Example: Testing a new feature
test('user can sort restaurants by rating', async () => {
    const search = new SearchComponent(page);
    const sort = new FilterComponent(page);    // Add new component
    
    await search.search('pizza');
    await sort.selectSortBy('recommended');       // Reuse component methods
    
    const results = await search.getResultCount();
    expect(results).toBeGreaterThan(0);
});
```
### 🔧 Setup & Running Tests Instructions
Requierments: Node LTS Version `22.11.0`, NPM version `10.9.0` 
1. Clone the repository
2. Install dependencies (npm i/npm install)
3. In case you don't have playwright browsers installed run npx playwright install (should take a minute)
4. To execute the tests in the repository please run: npx playwright test (For headed mode please use npx playwright test --ui)
5. Only when the run finishes you can see the report, Please run npx playwright show-report
