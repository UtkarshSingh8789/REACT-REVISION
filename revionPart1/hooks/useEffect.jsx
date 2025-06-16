
// clearing the concept of use Effect:
// project 1 fetch the api (https://jsonplaceholder.typicode.com/todos/) and create 4 button buton 1 have todos of id 1 and buton 2 have todos of id 2 and so on...
// when there is loading show loading if the result come then show the result;


// useEffect is a Hook that lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.
import { useEffect,useState } from "react";
function EffectHook(){
    const [currentTab,setCurrentTab]=useState(1);
    const [data,setData]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        console.log(`called by Tab ${currentTab}`)
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab).
        then(async (res)=>{
            const json=await res.json();
            setData(json);
            setLoading(false);
        })
        // setLoading(false);
    },[currentTab])// we have make the our useEffect dependent on currentTab so whenver the curret tab changes the use effect re -run;
    // when we make or useEffect dependency arrray empty then we know if the component rerender then also useEffect will run one time;
    // hence it will not refetch for every id so we have to make it dependent on current tab;
    return (
        <div>
            <button onClick={function() {
            setCurrentTab(1)
            }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
            <button onClick={function() {
            setCurrentTab(2)
            }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
            <button onClick={function() {
            setCurrentTab(3)
            }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
            <button onClick={function() {
            setCurrentTab(4)
            }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
            <br /> 
            {loading ? "Loading..." : data.title}
        </div>
    )
}
export default EffectHook