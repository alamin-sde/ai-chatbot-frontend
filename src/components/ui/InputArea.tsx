import { Mic, MicOff, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { InputAreaPropsType } from "../../types/input-area-type";
import { MessageDataType } from "../../types/message-type";
import { SendMessageType } from "../../types/send-message.type";
import api from "../../services/api";

const InputArea = ({ currentSessionId, setMessages }: InputAreaPropsType) => {
    const [message, setMessage] = useState<string>("");
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)

    }
    const handleSendMessage = async () => {
        sendMessage(message)

    }
    const sendMessage = async (message: string) => {
        try {

            if (!message.trim()) return;
            const userMessage: MessageDataType = {
                id: Date.now(),
                role: "user",
                content: message,
                timestamp: new Date()
            }
            setMessages((prevMessages) => [...prevMessages, userMessage])
            const payload: SendMessageType = { message: message, sessionId: currentSessionId }
            const response = await api.post("/chat/send-message", payload)
            const botMessage: MessageDataType = {
                id: Date.now() + 1,
                role: 'assistant',
                content: response.data.message,
                timestamp: response.data.timestamp

            }
            setMessages((prevMessages) => [...prevMessages, botMessage])
        } catch (error) {
            console.log("failed to send message for", error)
        }



    }
    return (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex  items-end gap-3 ">
                    <textarea
                        value={message}
                        onChange={(e) => handleOnChange(e)}
                        className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:outline-none focus:ring-blue-500 placeholder-gray-500 resize-none"
                        placeholder="Type your message..."
                        rows={1}
                        style={{ minHeight: '48px', maxHeight: '120px' }}
                    />
                    <div className="flex gap-2" >
                        <button
                            className="input-area-btn"
                        >
                            <Paperclip size={20} />
                        </button>
                        <button
                            className="input-area-btn"
                        >
                            <Mic size={20} />
                        </button>
                        <button
                            className="input-area-btn bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                            onClick={handleSendMessage}
                        >
                            <Send size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InputArea;