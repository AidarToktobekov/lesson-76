export interface IMessage{
    message:string;
    id: string;
    author: string;
    dateTime: string;
}

export interface MessageMutation {
    message: string;
    author: string;
}