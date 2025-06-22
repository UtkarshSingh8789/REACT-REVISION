import { createContext,useState,useContext } from "react";
const countContext=createContext();
function CountContextProvider({children}){
    console.log("context provider component rerender");
    const [count,setCount]=useState(0);
    return (
        <countContext.Provider value={{count,setCount}}>
            {children}
        </countContext.Provider>
    )
}
function Parent(){
    return(
        <div>
            <CountContextProvider>
                <Increase/>
                <Decrease/>
                <Value/>
            </CountContextProvider>
        </div>
    )
}
function Increase(){
    const {setCount}=useContext(countContext);
    console.log("Increase component rerender")
    return (
        <div>
            <button onClick={()=>{
                setCount((prev)=>prev+1)
            }}>INCREASE</button>
        </div>
    )
}
function Decrease(){
    const {setCount}=useContext(countContext);
    console.log("Decrease component rerender")
    return (
        <div>
            <button onClick={()=>{
                setCount((prev)=>prev-1)
            }}>DECREASE</button>
        </div>
    )
}
function Value() {
  const {count} = useContext(countContext);
  console.log("Vlaue component rerender");
  return <p>Count: {count}</p>;
}
export default Parent


// THEORY-> 

// The Context API primarily addresses the issue of prop drilling by allowing you to share state across your component tree without needing to pass props through every level.
// It doesn’t optimise renders in your application, which becomes important if/when your application becomes bigger