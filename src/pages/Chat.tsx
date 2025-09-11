import { motion } from "framer-motion"
import { MessageCircle, Mic, Paperclip, Trash2, Volume2 } from "lucide-react"

const Chat = () => {
    return (
        <div className="max-w-4xl mx-auto my-2">
            <div className="flex justify-between px-4">
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
            <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
                className="text-center py-8"
            >
                <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex justify-center items-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="font-bold text-2xl text-gray-900">Welcome to AI Chat!</h2>
                <p className=" text-gray-600">Start a conversation with our intelligent AI assistant</p>
            </motion.div>
            <div>
                <button
                >
                    <Paperclip size={20}/>
                </button>
                <div className="relative bg-pink-400">
                    <textarea
                      className="input-field"
                      style={{minHeight:"50px",maxHeight:"100px"}}
                    />
                    <button className="absolute right-3 top-1/2 bg-green-400  -translate-y-1/2">
                        <Mic/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Chat