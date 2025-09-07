import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    return (
        <nav className="text-white border-b shadow-sm border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className=" max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex justify-center items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex justify-center items-center">
                            <MessageCircle className="w-5 h-5  text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white">AI Chat</span>
                    </Link>
                    {/* Desktop Navigation */}
                    <div className=" hidden md:flex justify-between">
                        <Link to="/login" className=" text-gray-600 font-medium px-3 py-2  dark:text-gray-300">
                            Login
                        </Link>
                        <Link to="/register" className="btn-primary">
                            Sign Up
                        </Link>

                        <button className="rounded-lg text-gray-500 p-2"
                            onClick={() => toggleTheme()}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Memu Button */}
                    <div className=" md:hidden flex justify-center items-center space-x-2">
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
                    </div>
                </div>
                <div>
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
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
