import { WDPPage } from './app.po';

describe('wdp App', () => {
  let page: WDPPage;

  beforeEach(() => {
    page = new WDPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
