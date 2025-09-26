import MessageList from "./MessageList"
import InputArea from "../components/ui/InputArea"
import { ChatAreaPropsType } from "../types/chat-area-type"

const Chat = ({ messages = [], setMessages, currentSessionId }: ChatAreaPropsType) => {

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <MessageList
          messages={messages}
        />
      </div>
      <InputArea
        currentSessionId={currentSessionId}
        setMessages={setMessages}
      />
    </div>
  )
}

export default Chat
