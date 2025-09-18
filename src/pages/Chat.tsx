import { motion } from "framer-motion"
import { MessageCircle, Mic, Paperclip, Send, Trash2, Volume2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useChat } from "../contexts/ChatContext"

const Chat = () => {
    const [message,setMessage]=useState<string>('')
    const {messages,initializeChat}=useChat();
    return (
        <div className=" flex flex-col max-w-4xl mx-auto my-2">
            <div className="flex-1 flex justify-between px-4">
                <div className="flex justify-center items-center space-x-4">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex justify-center items-center">
                        <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-900">AI Assistance</h2>
                        <p className="text-sm text-gray-500">Free plan</p>
                    </div>
                </div>

                <div className="flex justify-center items-center space-x-4">
                    <button
                        className="text-gray-500"
                    >
                        <Volume2 size={20} />
                    </button>
                    <button
                        className="text-gray-500"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
           { message.length ===0 &&<motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-center py-8"
            >
                <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex justify-center items-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-bold text-2xl text-gray-900">Welcome to AI Chat!</h2>
                <p className=" text-gray-600">Start a conversation with our intelligent AI assistant</p>
            </motion.div>}
            <motion.div>
                
            </motion.div>
            
            <div className="flex items-center space-x-2">
                <button
                >
                    <Paperclip size={20} />
                </button>
                <div className="flex-1 relative flex items-center">
                    <textarea
                        className="input-field  resize-none "
                        rows={1}
                        style={{ minHeight: '48px', maxHeight: '120px'}}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                    />
                    
                    <button className="absolute right-3 top-1/2  -translate-y-1/2">
                        <Mic />
                    </button>
                </div>
                <button
                    className="btn-primary"
                    onClick={initializeChat}
                >
                    < Send size={20} />
                </button>
            </div>
        </div>
    )
}
export default Chat