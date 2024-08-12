export interface IMessage{
    id: string;
    message: string;
    author: string;
    dateTime: string;
}

export interface MessageWithoutId {
    message: string;
    author: string;
}