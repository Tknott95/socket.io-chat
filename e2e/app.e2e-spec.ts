import { SocketIoChatPage } from './app.po';

describe('socket-io-chat App', function() {
  let page: SocketIoChatPage;

  beforeEach(() => {
    page = new SocketIoChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
