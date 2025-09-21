import { ChatTitileType } from "./chat-title-type"
import { MessageDataType } from "./message-type"

export type ChatContextValueType={
    messages:MessageDataType[],
    chatTitles:ChatTitileType[],
    quickReplies:string[],
    initializeChat:()=>void,
    loadChatHistory:(v:string)=>void
   
}