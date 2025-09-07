import type { ReactNode } from "react"

export type IputFieldPropsType={
    id:string,
    name:string,
    label?:string,
    type?:React.HTMLInputTypeAttribute,
    autoComplete?:string,
    value:string
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleShowPassword?:()=>void,
    placeholder?:string,
    icon?:ReactNode,
    className?:string,
    showPassword?:boolean,
    isPassword?:boolean
}