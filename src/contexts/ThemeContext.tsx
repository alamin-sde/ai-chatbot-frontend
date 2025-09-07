import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeContextType } from "../types/themeContext.type";
import type { ThemeProviderValueType } from "../types/themeProvider.type";
const ThemeContext = createContext({}as ThemeProviderValueType);
//custom hooks
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("ThemeContext not found.");
    }
    return context;
}
// ThemeProvider
const ThemeProvider = ({ children }: ThemeContextType) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== undefined) {
            return localStorage.getItem("theme") || "light"
        }
        return 'light'
    })
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    const setLightTheme = () => setTheme("light");
    const setDarkTheme = () => setTheme("dark");
    const value: ThemeProviderValueType = {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
        isDark: theme === "dark"
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider