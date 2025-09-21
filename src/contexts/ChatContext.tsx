import { createContext,useContext,useState  } from "react"
import { ProviderPropsType } from "../types/provider.props.type"
import api from "../services/api"
import { ChatContextValueType } from "../types/chatContext.type"
import { MessageDataType } from "../types/message-type"

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
        if(!message.trim())return;
        const userMessage:MessageDataType ={
            id:Date.now(),
            role:"user",
            content:message,
            timestamp:new Date()
        }
        setMessages((prevMessages)=>[...prevMessages,userMessage])


    }
    const loadChatHistory=async()=>{
        
    }
    const value:ChatContextValueType={
        messages,
        quickReplies,
        initializeChat
    }
    
    return(
        <chatContext.Provider value={value}>
            {children}
        </chatContext.Provider>
    )
}
