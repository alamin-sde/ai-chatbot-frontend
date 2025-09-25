import MessageList from "./MessageList"
import InputArea from "../components/ui/InputArea"

const Chat = () => {

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <MessageList />
      </div>
        <InputArea />
    </div>
  )
}

export default Chat
