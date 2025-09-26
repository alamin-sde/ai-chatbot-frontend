import { ChatTitileType } from "./chat-title-type"
import { MessageDataType } from "./message-type"

export type ChatContextValueType={
    messages:MessageDataType[],
    chatTitles:ChatTitileType[],
    quickReplies:string[],
    currentSessionId:string|null,
    setCurrentSessionId:React.Dispatch<React.SetStateAction<string | null>>,
    initializeChat:()=>void,
    loadChatTitles:(v:string)=>void,
    sendMessage:(v:string)=>void,
    loadChatHistory:()=>void
   
}