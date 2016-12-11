import { B4BOTPage } from './app.po';

describe('b4-bot App', function() {
  let page: B4BOTPage;

  beforeEach(() => {
    page = new B4BOTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
