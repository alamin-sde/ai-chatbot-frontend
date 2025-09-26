import { useChat } from "../contexts/ChatContext";
import { MessageContentPropsType } from "../types/message-content-type";

const MessageContent = ({messages}:MessageContentPropsType) => {
    return (
        <div className="bg-purple-400">
            {
                messages.map((message) => (
                    <div>
                        {message.content}
                    </div>
                ))
            }

        </div>
    )
}
export default MessageContent;