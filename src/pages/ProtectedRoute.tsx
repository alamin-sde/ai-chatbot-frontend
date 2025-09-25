
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { ProviderPropsType } from "../types/provider.props.type";
const ProtectedRoute=({children}:ProviderPropsType)=>{
    const {user}=useAuth();
    console.log("ProtectedRoute user:",user)
    if(!user){
        return Navigate({to:'/login',replace:true})

    }
    return(
        <div>
            {children}
        </div>
    )


}
export default ProtectedRoute;