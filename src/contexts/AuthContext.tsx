import { createContext, useContext, useState } from "react";
import { UserType } from "../types/user.type";
import { UserRegisterType } from "../types/register.user.type";
import api from "../services/api";
import toast from "react-hot-toast";
import { AuthContextType } from "../types/authContext.type";

const AuthContext = createContext({} as any)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}
export const AuthProvider = ({ children }: AuthContextType) => {
    const [user, setUser] = useState<UserType>({} as UserType);
    const register = async (userData: UserRegisterType) => {
        try {
            const response = await api.post('/register', userData);
            const { token, newUser } = response.data;
            if (token) {
                localStorage.setItem('token', token);
                setUser(newUser);
            }
            toast.success('Account created successfully!')
            return { success: true }

        } catch (error: any) {
            const message = error.response?.data?.error || 'Registration failed'
            toast.error(message)
            return { success: false, error: message }

        }


    }
    const value = {
        user,
        register
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
