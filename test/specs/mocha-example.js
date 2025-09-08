
describe.skip('Description of Test Suite', () => {
    before(() => {
        console.log('runs once before the first test in this block');
    });
    after(() => {
        console.log('runs once after the last test in this block');
    });
    beforeEach(() => {
        console.log('runs before each test in this block');
    });
    afterEach(() => {
        console.log('runs after each test in this block');
    })
    it('Desc of Individual Test Suite', () => {
        console.log('Desc of Individual Test Suite 1');
    });
    it('Desc of Individual Test Suite', () => {
        console.log('Desc of Individual Test Suite 2');
    });
    it('Desc of Individual Test Suite', () => {
        console.log('Desc of Individual Test Suite 2');
    });
})