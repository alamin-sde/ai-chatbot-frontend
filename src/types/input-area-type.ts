import { MessageDataType } from "./message-type"

export type InputAreaPropsType={
    currentSessionId: string | null,
    setMessages:React.Dispatch<React.SetStateAction<MessageDataType[]>>,
    
}