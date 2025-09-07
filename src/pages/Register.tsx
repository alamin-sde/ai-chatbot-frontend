import { motion } from "framer-motion"
import { Lock, Mail, MessageCircle, User } from "lucide-react"
import { useState } from "react"
import type { RegisterFormDataType } from "../types/registerFormData.type"
import InputField from "../components/ui/InputField"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import { Link } from "react-router-dom"

const Register = () => {
    const [formData, setFormData] = useState<RegisterFormDataType>({} as RegisterFormDataType);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [loading,setLoading]=useState<boolean>(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
    return (
        <div className=" min-h-screen  flex justify-center items-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8"
            >
                <div className="text-center">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex justify-center items-center">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">Create your account</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Join thousand of users chatting with AI</p>
                </div>
                <motion.form
                    onSubmit={() => { }}
                    className="card p-8"
                >
                    <div className="space-y-4">
                        <InputField
                            id="username"
                            name="username"
                            label="Username"
                            autoComplete="username"
                            placeholder="Select an option"
                            value={formData?.username ?? ""}
                            onChange={handleChange}
                            icon={<User className="w-5 h-5" />}
                        />
                        <InputField
                            id="email"
                            name="email"
                            autoComplete="email"
                            label="Email Address"
                            placeholder="Enter your email"
                            value={formData?.email ?? ""}
                            onChange={handleChange}
                            icon={<Mail className="w-5 h-5" />}
                        />
                        <InputField
                            id="password"
                            name="password"
                            autoComplete="password"
                            label="Password"
                            placeholder="Create a password"
                            isPassword={true}
                            value={formData?.password ?? ""}
                            onChange={handleChange}
                            handleShowPassword={() => setShowPassword(!showPassword)}
                            showPassword={showPassword}
                            icon={<Lock className="w-5 h-5" />}
                        />
                        <InputField
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="confirmPassword"
                            label="Confirm Password"
                            placeholder="Confirm your password"
                            isPassword={true}
                            value={formData?.confirmPassword ?? ""}
                            onChange={handleChange}
                            handleShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                            showPassword={showConfirmPassword}
                            icon={<Lock className="w-5 h-5" />}
                        />
                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type='checkbox'
                                className="h-4 w-4 rounded text-primary-600 focus:ring-primary-500 border-gray-300"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="text-primary-600 hover:text-primary-500">
                                    Terms of Service
                                </a>{' '}
                                and {' '}
                                <a href="#" className="text-primary-600 hover:text-primary-500" >
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full justify-center items-center"
                        >
                            {loading ? <div className="flex justify-center items-center"> <LoadingSpinner size="sm" className="mr-2" />
                                Creating account...</div> : 'Create account'}
                        </button>
                        <div className=" text-center text-sm">
                            <p className="text-gray-600">
                                Already have an account ?{' '}
                                <Link to='/login'
                                    className="text-primary-600 font-medium focus:text-primary-500"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                    </div>
                </motion.form>
            </motion.div>
        </div>

    )
}
export default Register