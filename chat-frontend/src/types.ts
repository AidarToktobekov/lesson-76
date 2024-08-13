export interface IMessage{
    message:string;
    id: string;
    author: string;
    dateTime: string;
}

export type MessageWithoutId = Omit<IMessage, 'id'>

export interface MessageMutation {
    message: string;
    author: string;
}