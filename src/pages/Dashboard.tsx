import { ArrowBigRight, MessageCircle, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

const Dashboard = () => {
    const { theme, toggleTheme } = useTheme();
    const { setCurrentView } = useAuth();
    const navigate=useNavigate()
    const switchToLogin=()=>{
       navigate('/login',{replace:true})
    }
    return (
        <div>
            <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200 ">
                <div
                    className="flex space-x-2 "
                >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex justify-center items-center">

                        <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <p
                        className="text-xl text-gray-900"
                    >
                        AI Chatbot
                    </p>
                </div>
                <div className="flex justify-between space-x-4 items-center">
                    <button
                        className="text-gray-600"
                        onClick={toggleTheme}
                    >
                        {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <button
                        className="btn-primary"
                    >
                        Sign Up

                    </button>
                    <button
                        className="btn-primary"
                        onClick={switchToLogin}
                    >
                        Login
                    </button>

                </div>
            </div>
            <div className="flex flex-col text-center mt-4">
                <p>
                    Your AI Assistant for Everything
                </p>
                <p>
                    Experience the future of conversation with our advanced AI. Get instant help with coding, writing, problem-solving, and creative tasks in a beautiful, intuitive interface.
                </p>

            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <button
                    className="btn-primary flex justify-center gap-2"
                >
                    Start Chatting Now <span><ArrowBigRight /></span>
                </button>
                <button
                    onClick={() => setCurrentView("register")}
                    className="btn-primary"
                >
                    Create account
                </button>
            </div>

        </div>
    )
}
export default Dashboard;