export class MessageDto {
  id: string;
  title: string;
  body: string;
}

export class MessagesDto {
  messages: MessageDto[];
}
