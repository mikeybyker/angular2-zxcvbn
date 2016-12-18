import { SecurePasswordPage } from './app.po';

describe('secure-password App', function() {
  let page: SecurePasswordPage;

  beforeEach(() => {
    page = new SecurePasswordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
