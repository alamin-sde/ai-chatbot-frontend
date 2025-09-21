import {  MessageSquare, Plus, Trash2, X } from "lucide-react"
import { useSidebar } from "../../contexts/SidebarContext";
import SearchFilter from "../ui/SearchFilter";
import { useChat } from "../../contexts/ChatContext";
import { useState } from "react";


const Sidebar =()=>{
    const {isSidebarOpen,toggleSidebar}=useSidebar();
    const { chatTitles } = useChat();
    const [currentTitleId,setCurrentTitleId]=useState<string>("");
    const selectChatSession=(sessionId:string)=>{
        setCurrentTitleId(sessionId)

    }
    console.log("chattiless===>",chatTitles)
    return(
        <div className={`bg-purple-500 w-80  absolute inset-y-0 transform ${isSidebarOpen ? 'translate-x-0':'-translate-x-full'} transition-transform duration-300 ease-in-out `}>
            <div className="flex justify-between">
                <h1>AI Chatbot</h1>
                <button
                onClick={toggleSidebar}
                >
                    <X size={20}/>
                </button>
               
            </div>
            <div className="flex justify-between">

                <button
                    // onClick={toggleSidebar}
                    className=" btn-primary flex justify-center items-center space-x-2 "

                >
                    <Plus size={20} /> <span>New chat</span>
                </button>

            </div>
            <div>
                <SearchFilter/>
            </div>
            <div>
               {chatTitles.length===0 && <div className="flex flex-col justify-center items-center">
                    <MessageSquare size={40}/>
                    <p>No conversation found</p>
                </div>}
                {chatTitles.map((chatTitle)=>(
                    <div
                    key={chatTitle.sessionId}
                    className={`flex rounded-lg p-3 ${currentTitleId===chatTitle.sessionId ? 'bg-blue-500':'bg-slate-50'}`}
                    >
                        <div 
                         className="flex-1 flex items-center space-x-2 cursor-pointer"
                         onClick={()=>selectChatSession(chatTitle.sessionId)}
                        >
                            <MessageSquare size={16} />
                            <p>{chatTitle.title}</p>
                        </div>
                        <button>
                            <Trash2 size={16}/>
                        </button>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Sidebar;