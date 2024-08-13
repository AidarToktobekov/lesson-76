import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useEffect} from "react";
import {fetchMessage, fetchNewMessages} from "./messagesThunk.ts";
import {selectLastMessages, selectMessages, selectMessagesFetching, selectNewMessages} from "./messagesSlice.ts";
import {Grid, Typography} from "@mui/material";
import Message from "../messages/components/Message/Message.tsx";
import {IMessage} from "../../types.ts";
import FormMessage from "./components/Form/Form.tsx";

const Messages = ()=>{

    const dispatch = useAppDispatch();
    const messages = useAppSelector(selectMessages);
    const lastMessage = useAppSelector(selectLastMessages);
    const loader = useAppSelector(selectMessagesFetching);
    const newMessages = useAppSelector(selectNewMessages)

    setInterval(()=>{
        // dispatch(fetchNewMessages(messages[messages.length - 1]?.dateTime));
        console.log('newMessages')
    }, 3000)

    useEffect(()=>{
        dispatch(fetchMessage());
    }, [dispatch])

    return(
        <>
            <Typography variant="h3">Add message</Typography>
            <FormMessage></FormMessage>
            <Typography marginBottom="60px" variant="h3">Chat</Typography>
            <Grid container spacing={2}>
                {loader? (lastMessage.map((message: IMessage)=>{
                    return(
                        <Message key={message.id} author={message.author} message={message.message} id={message.id} dateTime={message.dateTime}></Message>
                    )
                })) : (<> dwadaw</>)}
            </Grid>
        </>
    )
}

export default Messages;