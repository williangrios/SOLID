import MessagingProtocol from "../classes/interfaces/messaging-protocol";

export default class Messaging implements MessagingProtocol{
  sendMessage(message: string): void{
    console.log('Sent message', message);
  }
}
