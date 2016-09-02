import { BananasPage } from './app.po';

describe('bananas App', function() {
  let page: BananasPage;

  beforeEach(() => {
    page = new BananasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
