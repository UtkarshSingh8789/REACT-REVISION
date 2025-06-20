import { useEffect,useRef } from "react";
function usePrev(val){
    const ref=useRef();
    useEffect(()=>{
        ref.current=val
    },[val])// this effect will run whent the value changes;
    return ref.current; // in react first their will be return then effect will call ;
}
export default usePrev