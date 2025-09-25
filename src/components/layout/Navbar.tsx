import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { useSidebar } from "../../contexts/SidebarContext";
import aichatbot from "../../assets/ai-chatbot.jpg";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    const { toggleSidebar } = useSidebar();
    const {user}=useAuth();  
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <nav className="text-white border-b shadow-sm border-gray-200 dark:bg-gray-800 dark:border-gray-700">

            <div>
                <div className="flex justify-between items-center  px-4 h-16">
                    <div >
                        <button
                            className="text-gray-600"
                            onClick={toggleSidebar}
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <button className="rounded-lg text-gray-500 p-2"
                            onClick={() => toggleTheme()}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <div>

                            <button
                            className="flex justify-center items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg"
                            >
                                <img
                                    src={aichatbot}
                                    className="w-8 h-8 rounded-full"
                                />
                                <p className="text-gray-900">{user.username}</p>

                            </button>
                        </div>


                    </div>

                    {/* Mobile Memu Button */}
                    {/* <div className=" md:hidden flex justify-center items-center space-x-2">
                        <button className="rounded-lg text-gray-500"
                            onClick={() => toggleTheme()}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            className="rounded-lg text-gray-500  dark:text-gray-400"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div> */}
                </div>
                {/* <div>
                    {mobileMenuOpen && (
                        <div className="md:hidden flex flex-col space-y-2">
                            <Link to="/login"
                                className="text-gray-600 dark:text-gray-300"
                            >
                                Login
                            </Link>
                            <Link to="/register" className="btn-primary">
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div> */}
            </div>
        </nav>
    );
};
export default Navbar;
