import { MessageService } from './message.service';

describe('Message service', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no message to start', () => {
    expect(service.messages.length).toBe(0);
  });

  it('should add a message when called', () => {
    service.add('test message');

    expect(service.messages.length).toBe(1);
  });

  it('should remove all messages when clear is called', () => {
    service.add('test message 1');
    service.add('test message 2');
    service.add('test message 3');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
