import { createContext,useContext,useState } from "react";
import { LoadingContextType } from "../types/loadingContext.type";
import { ProviderPropsType } from "../types/provider.props.type";

const loadingContext = createContext<LoadingContextType>({} as LoadingContextType);
export const LoadingProvider=({children}:ProviderPropsType)=>{
    const [loading,setLoading]=useState<boolean>(false);
    const value:LoadingContextType={loading,setLoading};
    return(
        <loadingContext.Provider value={value}>
            {children}
        </loadingContext.Provider>
    )

}
export const useLoading=()=>{
    const context = useContext(loadingContext)
    if(!context){
        throw new Error('useLoading must be used within an LoadingProvider')
    }
    return context;
}
