// describe('Jest Hooks - Test Suit', () => {

//     beforeAll(() => {
//         console.log('Execute Before All Tests Once');
//     });

//     beforeEach(() => {
//         console.log('Execute Before Each Test');
//     });

//     afterAll(() => {
//         console.log('Execute After All Tests Once');
//     });

//     afterEach(() => {
//         console.log('Execute After Each Test');
//     });

//     it('Jest Hooks Test', () => {
//         console.log('Jest - This is a Test for Jest Hooks Examples ---->');
//     })
   
// })


//By default, the before and after blocks apply to every test in a file.
//You can also group tests together using a describe block. 
//When inside a describe block,before and after blocks only apply to the tests within that describe block.

beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test outside describe'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test inside describe'));
});