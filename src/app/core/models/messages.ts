export interface Message {
    messageChatId: number;
    messageContent: string;
    receiver: number;
    sender: number;
    sendDate: string;
}

export interface MessageFullInfo {
    message: Message;
    type: 'send' | 'recibe';
    senderImage: string;
    recieverImage: string;
}