// THEORY-> As your application grows, you might find that multiple components need access to the same state. 
// Instead of duplicating state in each component, you can lift the state up to the (LCA), allowing the common ancestor to manage it.
// this concept is used only to send the props down from LCA 
// if we have to  pass data from higher level component to lower level component we use prop drillling
import { useState } from "react";
function Parent(){
    const [count,setCount]=useState(0);
    console.log("parent rerenders")
    return (
        <div>
            <Increase count={count} setCount={setCount}/>
            <Decrease count={count} setCount={setCount}/>
            <Value count={count} setCount={setCount}/>
        </div>
    )
}
function Increase({count,setCount}){
    console.log("Increase component rerender")
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> INCREASE </button>
        </div>
    )
}
function Decrease({count,setCount}){
    console.log("Decrease component rerender")
    return (
        <div>
            <button onClick={()=>setCount(count-1)}> DECREASE </button>
        </div>
    )
}
function Value({count}){
    console.log("Value component rerenders");
    return (
        <p>Count: {count} </p>
    )
}
export default Parent;


// problem->when the user click on the increase button then count changes state variable of parent changes then
// parent component rerenders ----->On re-render, the Parent function runs again and creates new versions of:
                                    {/* <Increase />
                                    <Decrease />
                                    <Value />
                                    since all of them receive the updated count all three component will rerender*/}
// this is the problem so many rerenders we have to decrease rerenders;