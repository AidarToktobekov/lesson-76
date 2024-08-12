import express from "express";
import fileDb from "../fileDb";
import {IMessage, MessageWithoutId} from "../types";
const messagesRouter = express.Router();



messagesRouter.get('/', async (req, res) => {
    const messages = await fileDb.getMessages();
    const queryDate = req.query.datetime as string;
    let result: IMessage[] = [];
    if(queryDate){
        const date = new Date(queryDate);
        if (isNaN(date.getDate())){
            return res.status(400).send({"error": "Wrong date!"});
        }
        let messageIndex: number = messages.length;
        messages.find((message , index)=>{
            if (message.dateTime === queryDate) {
                messageIndex = index;
            }
        });
        messages.map((message, index)=>{
            if(messageIndex < index){
                result.push(message);
            }
        })
    }else{
        result = messages;
    }

    return res.send(result);
});

messagesRouter.post('/', async (req, res) => {
    if(!req.body.message || !req.body.author){
        return res.status(400).send({"error": "Author and message must be present in the request"});
    }

    const message:MessageWithoutId = {
        message: req.body.message,
        author: req.body.author,
    }

    const savedMessage = await fileDb.addMessage(message)

    return res.send(savedMessage)
});


export default messagesRouter;