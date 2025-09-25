import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ChatArea from "./Chat";

const ChatPage = () => {
  return (
    <div className=" h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">
          <ChatArea />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
