import {Button, Grid, TextField} from "@mui/material";
import {useAppDispatch} from "../../../../app/hooks.ts";
import {FormEvent, useState} from "react";
import {addMessage, fetchMessage} from "../../messagesThunk.ts";
import {MessageMutation} from "../../../../types.ts";

const FormMessage =()=>{

    const dispatch = useAppDispatch();
    const [stateForm, setStateForm] = useState<MessageMutation>({author: '', message: ''})

    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        setStateForm({author: '', message: ''})
        dispatch(addMessage(stateForm));
        dispatch(fetchMessage());
    }

    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setStateForm((prev)=>({...prev, [event.target.name]: event.target.value}));
    }

    return(
        
        <Grid onSubmit={onSubmit} marginBottom="60px" container spacing={2} direction="column" component="form">
            <Grid item>
                <TextField value={stateForm.author} onChange={onChange} required label="Author" name="author" multiline variant="standard"/>
            </Grid>
            <Grid item>
                <TextField value={stateForm.message} onChange={onChange} required label="Message" name="message" multiline variant="standard"/>
            </Grid>
            <Grid item>
                <Button type="submit" variant="contained" color="secondary">Save</Button>
            </Grid>
        </Grid>
        
    )
}

export default FormMessage