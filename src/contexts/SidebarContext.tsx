
import { createContext, use, useContext, useState } from "react";
import { ProviderPropsType } from "../types/provider.props.type";
import { SidebarContextValueType } from "../types/sidebar-context-value-type";

const sidebarContext = createContext({} as SidebarContextValueType);
export const useSidebar=()=>{
    const context = useContext(sidebarContext);
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarContextProvider");
    }
    return context;
}   
export const SidebarContextProvider=({children}:ProviderPropsType)=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState<boolean>(false);
    const toggleSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }  
    const value:SidebarContextValueType={
        isSidebarOpen,
        toggleSidebar
    }  
    return(
        <sidebarContext.Provider value={value}>
            {children}
        </sidebarContext.Provider>
    )

}
