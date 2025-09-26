import { createContext,useContext,useEffect,useState  } from "react"
import { ProviderPropsType } from "../types/provider.props.type"
import api from "../services/api"
import { ChatContextValueType } from "../types/chatContext.type"
import { MessageDataType } from "../types/message-type"
import { ChatTitileType } from "../types/chat-title-type"
import { SendMessageType } from "../types/send-message.type"

const chatContext = createContext({})
export const useChat=()=>{
    const context = useContext(chatContext) as ChatContextValueType
    if(!context){
        throw new Error("useChat must be used within a ChatProvider")
    }
    return context;
}
export const ChatProvider =({children}:ProviderPropsType)=>{
    const [messages,setMessages]=useState<MessageDataType[]>([])
    const [quickReplies,setQuickReplies]=useState<string[]>([])
    const [chatTitles,setChatTitles]=useState<ChatTitileType[]>([]);
    const [currentSessionId,setCurrentSessionId]=useState<string|null>(null);
    const initializeChat=()=>{
        console.log("initialize chat")
        loadQuickReplies()
    }
    const loadQuickReplies=async()=>{
        try{
            const response=await api.get('/chat/quick-replies')
            setQuickReplies(response.data)
            
        }catch(error){
            console.log("failed to load quick replies",error)
        }
    }
    const sendMessage =async(message:string)=>{
        try{

            if(!message.trim())return;
            const userMessage:MessageDataType ={
                id:Date.now(),
                role:"user",
                content:message,
                timestamp:new Date()
            }
            setMessages((prevMessages)=>[...prevMessages,userMessage])
            const payload:SendMessageType={message:message,sessionId:currentSessionId}
            const response = await api.post("/chat/send-message",payload)
            const botMessage:MessageDataType={
                id:Date.now()+1,
                role:'assistant',
                content:response.data.message,
                timestamp:response.data.timestamp

            }
            setMessages((prevMessages)=>[...prevMessages,botMessage])
        }catch(error){
            console.log("failed to send message for",error)
        }
       


    }
   
    const loadChatTitles=async(searchTitle:string)=>{
        try{
            const response=await api.post('/chat/chat-titles',{searchTitle})
            setChatTitles(response.data)
          
        }catch(error){
            console.log("failed to load chat history",error)
        }

    }

    const loadChatHistory=async()=>{
        try{
            if(currentSessionId){
                const response = await api.post('/chat/chat-history',{sessionId:currentSessionId})
                setMessages(response.data.messages)
            }

        }catch(error){
            console.log(error)
        }
    }
   
    const value:ChatContextValueType={
        messages,
        chatTitles,
        quickReplies,
        currentSessionId,
        setCurrentSessionId,
        initializeChat,
        loadChatTitles,
        sendMessage,
        loadChatHistory

    }
    
    return(
        <chatContext.Provider value={value}>
            {children}
        </chatContext.Provider>
    )
}
