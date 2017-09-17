import { HiChatCapstonePage } from './app.po';

describe('hi-chat-capstone App', () => {
  let page: HiChatCapstonePage;

  beforeEach(() => {
    page = new HiChatCapstonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
