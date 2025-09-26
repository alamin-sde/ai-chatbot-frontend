import { MessageDataType } from "./message-type"

export type ChatAreaPropsType={
    currentSessionId: string | null,
    messages:MessageDataType[]
    setMessages:React.Dispatch<React.SetStateAction<MessageDataType[]>>
}