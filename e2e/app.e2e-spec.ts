import { InscricaoPage } from './app.po';

describe('inscricao App', () => {
  let page: InscricaoPage;

  beforeEach(() => {
    page = new InscricaoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
