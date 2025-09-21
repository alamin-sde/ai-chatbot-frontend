import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { useSidebar } from "../../contexts/SidebarContext";
const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    const {toggleSidebar}=useSidebar();
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

                    {/* <div className="flex justify-center items-center space-x-4 px-4">
                        <div className="flex-1">
                            <button
                                className="text-gray-600"
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                        <Link to="/" className=" flex justify-center items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex justify-center items-center">
                                <MessageCircle className="w-5 h-5  text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">AI Chat</span>
                        </Link>
                    </div> */}

                    {/* Desktop Navigation */}
                    <div className="flex justify-between">
                        {/* <Link to="/login" className=" text-gray-600 font-medium px-3 py-2  dark:text-gray-300">
                            Login
                        </Link> */}
                        <button className="rounded-lg text-gray-500 p-2"
                            onClick={() => toggleTheme()}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/register" className="btn-primary">
                            Login
                        </Link>


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
