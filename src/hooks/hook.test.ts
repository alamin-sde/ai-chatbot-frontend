import { useState } from "react";

function useCounter(initialValue:any){
    const[count,setCount]=useState(initialValue);
    const increament =()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    const reset =()=>setCount(initialValue);
    return {count,increament,decrement,reset}

}
export default useCounter;
