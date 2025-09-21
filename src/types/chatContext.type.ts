import { MessageDataType } from "./message-type"

export type ChatContextValueType={
    messages:MessageDataType[],
    quickReplies:string[],
    initializeChat:()=>void
   
}