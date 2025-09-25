import { createContext, useContext, useEffect, useState } from "react";
import { UserType } from "../types/user.type";
import { UserRegisterType } from "../types/register.user.type";
import api from "../services/api";
import toast from "react-hot-toast";
import { ProviderPropsType } from "../types/provider.props.type";
import { LogInType } from "../types/login.type";
import { AuthContextValuetype } from "../types/authContext.type";

const AuthContext = createContext({} as any)
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
}
export const AuthProvider = ({ children }: ProviderPropsType) => {
    const [user, setUser] = useState<UserType | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null
    });
    const [currentView, setCurrentView] = useState<'dashboard' | 'login' | 'register'>('dashboard')
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
            const message = error.message || 'Registration failed'
            toast.error(message)
            return { success: false, error: message }

        }

    }
    const login = async (credentials: LogInType) => {
        try {
            const response = await api.post('/login', credentials)
            const { token, user } = response.data
            if (token) {
                localStorage.setItem('token', token)
            }
            setUser(user)
            localStorage.setItem('user', JSON.stringify(user))
            toast.success('Welcome back!')
            return { success: true }

        } catch (error) {
            console.log("login failed", error)
            toast.error('Login failed. Please check your credentials.')
            return { success: false }
        }

    }
    const value: AuthContextValuetype = {
        user,
        currentView,
        setCurrentView,
        register,
        login
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
