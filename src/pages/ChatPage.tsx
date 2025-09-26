import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ChatArea from "./Chat";
import api from "../services/api";
import { MessageDataType } from "../types/message-type";

const ChatPage = () => {
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<MessageDataType[]>([])

  useEffect(() => {
    console.log("in side use effect-->")
    loadChatHistory()
  }, [currentSessionId])
  const loadChatHistory = async () => {
    try {
      if (currentSessionId) {
        const response = await api.post('/chat/chat-history', { sessionId: currentSessionId })
        setMessages(response.data.messages)
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=" h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar
          currentSessionId={currentSessionId}
          setCurrentSessionId={setCurrentSessionId}
        />
        <div className="flex-1">
          <ChatArea
            currentSessionId={currentSessionId}
            messages={messages}
            setMessages={setMessages}

          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
