import { MessageSquare } from "lucide-react";
import { useEffect } from "react";
import MessageContent from "./MessageContent";
import { MessageListPropsType } from "../types/message-list-type";

const MessageList = ({messages=[]}:MessageListPropsType) => {
    return (
        <div className=" h-full">
            {messages.length === 0 ?
                <div className=" flex items-center justify-center h-full">

                    <div className="text-center space-y-1">
                        <div
                            className="flex justify-center items-center bg-gradient-to-br from-blue-400 to-purple-500 h-16 w-16 mx-auto rounded-full"
                        >
                            <MessageSquare className="w-7 h-7 text-white" />
                        </div>
                        <h3>Start a new conversation</h3>
                        <p>Ask me anything! I'm here to help you with your questions.</p>

                    </div>
                </div>
                :
                <div>
                    <MessageContent
                     messages={messages}
                    />
                </div>
            }

        </div>
    )

}
export default MessageList;