import { Message } from "../clients/ApiLoggerClient";

const MessageList = (props: MessageListProps) => {
    
    if(!props.messages){
        return <div>Empty List</div>
    }

    return <>
        {props.messages.map(m => <div>{m.description}</div>)}
    </>
}

export interface MessageListProps{
    messages?: Array<Message>;
}

export default MessageList;