import { MessageCircle, MessageSquare, Plus, X } from "lucide-react"
import { useSidebar } from "../../contexts/SidebarContext";
import SearchFilter from "../ui/SearchFilter";

const Sidebar =()=>{
    const {isSidebarOpen,toggleSidebar}=useSidebar();
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
               { <div className="flex flex-col justify-center items-center">
                    <MessageSquare size={40}/>
                    <p>No conversation found</p>
                </div>}
            </div>

        </div>
    )
}
export default Sidebar;