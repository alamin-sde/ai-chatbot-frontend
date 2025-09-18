import { motion } from "framer-motion";
import { Lock, MessageCircle, User } from "lucide-react";
import InputField from "../components/ui/InputField";
import { useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { useAuth } from "../contexts/AuthContext";
import { LogInType } from "../types/login.type";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loading,setLoading]=useState<boolean>(false)
    const [credentials,setCredentials]=useState<LogInType>({} as LogInType)
    const {login}=useAuth();
     const navigate = useNavigate()
    const handleLogin=async()=>{
        setLoading(true)
        const response=await login(credentials)
        setLoading(false)
        if(response.success){
            setCredentials({} as LogInType);
            navigate('/chat', { replace: true })
        }
    }
    return (
        <div className="py-12 flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8"
            >
                <div className="text-center   ">
                    <div className="flex justify-center">
                        <div className="h-16 w-16 bg-gradient-to-br text-white from-primary-500 to-secondary-500 rounded-full flex justify-center items-center">
                            <MessageCircle className="h-8 w-8" />
                        </div>
                    </div>  
                    <h2 className="text-3xl mt-6 font-bold">Welcome Back</h2>
                    <p className=" mt-2 text-sm text-gray-600 dark:text-gray-400">Sign in to your account to continue chatting</p>
                </div>

                <div className="card p-8">
                    <div className="space-y-4">
                        <InputField
                            id="username"
                            name="username"
                            label="Username"
                            autoComplete="username"
                            placeholder="Enter your email or username"
                            value={credentials?.username ?? ""}
                            onChange={(e) =>setCredentials((prev)=>({...prev,username:e.target.value})  )}
                            icon={<User className="w-5 h-5" />}
                        />
                        <InputField
                            id="password"
                            name="password"
                            label="Password"
                            autoComplete="password"
                            isPassword={true}
                            placeholder="Enter your password"
                            value={credentials?.password??""}
                            onChange={(e) =>setCredentials((prev)=>({...prev,password:e.target.value}))}
                            icon={<Lock className="w-5 h-5" />}
                        />
                        <div className="flex  justify-between ">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type='checkbox'
                                    className="h-4 w-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href='#'className="text-sm text-primary-600 hover:text-primary-500 ml-">Forgot password</a>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary w-full"
                            onClick={handleLogin}
                        >
                            {loading ? <div className="flex items-center justify-center gap-2">
                                <LoadingSpinner size="sm" className="" /> Signing...
                            </div> : "Sign In"}
                        </button>
                    </div>
                </div> 
            </motion.div>
        </div>
    )
}
export default Login;