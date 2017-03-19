import { TestingFirePage } from './app.po';

describe('testing-fire App', () => {
  let page: TestingFirePage;

  beforeEach(() => {
    page = new TestingFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
