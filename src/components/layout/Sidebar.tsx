import {  MessageSquare, Plus, Trash2, X } from "lucide-react"
import { useSidebar } from "../../contexts/SidebarContext";
import SearchFilter from "../ui/SearchFilter";
import { useChat } from "../../contexts/ChatContext";
import { useEffect, useState } from "react";


const Sidebar =()=>{
    const {isSidebarOpen,toggleSidebar}=useSidebar();
    const { chatTitles,currentSessionId,setCurrentSessionId} = useChat();
    
   
    const selectChatSession=(sessionId:string)=>{
        setCurrentSessionId(sessionId)

    }
    return(
        <div className={`bg-gray-100 w-80  fixed inset-y-0 z-50 transform ${isSidebarOpen ? 'translate-x-0':'-translate-x-full'} transition-transform duration-300 ease-in-out `}>
            <div className="flex justify-between p-4 border-b shadow-sm border-gray-200 h-16">
                <h1
                className="text-xl font-bold text-gray-900"
                >
                    AI Chatbot
                </h1>
                <button
                onClick={toggleSidebar}
                >
                    <X size={20}/>
                </button>
               
            </div>
            <div className="flex justify-between p-2">

                <button
                    // onClick={toggleSidebar}
                    className=" btn-primary flex justify-center items-center space-x-2 w-full "

                >
                    <Plus size={20} /> <span>New chat</span>
                </button>

            </div>
            <div className="p-2">
                <SearchFilter/>
            </div>
            <div className="p-2">
               {chatTitles.length===0 && <div className="flex flex-col justify-center items-center">
                    <MessageSquare size={40}/>
                    <p>No conversation found</p>
                </div>}
                {chatTitles.map((chatTitle)=>(
                    <div
                    key={chatTitle.sessionId}
                    className={`flex rounded-lg p-3  ${currentSessionId===chatTitle.sessionId ? 'bg-blue-500':'bg-slate-50'}`}
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