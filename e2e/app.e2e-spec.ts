import { CrudTesterPage } from './app.po';

describe('crud-tester App', () => {
  let page: CrudTesterPage;

  beforeEach(() => {
    page = new CrudTesterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
