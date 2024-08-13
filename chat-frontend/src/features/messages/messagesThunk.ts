import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import {IMessage, MessageMutation} from '../../types.ts';

export const fetchMessage = createAsyncThunk<IMessage[]>(
    'message/fetchAll',
    async () =>{
        const {data: messages} = await axiosApi.get<IMessage[]>('/message');
        return messages;
    }
)
export const fetchNewMessages = createAsyncThunk<IMessage[], string>(
    'message/fetchNewMessages',
    async (date: string) =>{
        const {data: messages} = await axiosApi.get<IMessage[]>(`/message?dateTime=${date}`);
        return messages;
    }
)


export const addMessage = createAsyncThunk<void, MessageMutation>(
    'message/create',
    async (messageMutation: MessageMutation) =>{
        await axiosApi.post('/message', messageMutation);
    }
)