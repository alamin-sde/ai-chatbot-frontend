import { LogInType } from "./login.type"
import { UserRegisterType } from "./register.user.type"
import { UserType } from "./user.type"

export type AuthContextValuetype={
    user:UserType,
    register:(userData:UserRegisterType)=>Promise<{success:boolean,error?:string}>,
    login:(credentials:LogInType)=>Promise<{success:boolean}>
}