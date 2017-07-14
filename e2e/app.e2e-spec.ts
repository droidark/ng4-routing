import { Ng4RoutingPage } from './app.po';

describe('ng4-routing App', () => {
  let page: Ng4RoutingPage;

  beforeEach(() => {
    page = new Ng4RoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
