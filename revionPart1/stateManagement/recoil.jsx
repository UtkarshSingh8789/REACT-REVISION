// THEORY OF RECOIL-> in context api we do state mangement by allowing you to share state across your component tree without needing to pass props through every level.
// but we are not able to minimize rerender so we study about recoil;

// To minimise the number of re-renders, and ensure that only components that are `subscribed` to a value `render`, state management was introduced.
// There are many libraries that let you do state management - 
// 1. mobx
// 2. recoil
// 3. redux

import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
const count=atom({
    key:'countState', // unique ID (with respect to other atoms/selectors)
    default:0, // default value (aka initial value)
})
function Par(){
    return (
        <RecoilRoot>
            <Increase/>
            <Decrease/>
            <Value/>
        </RecoilRoot>
    )
}
function Increase(){
    const setCount=useSetRecoilState(count);
    return(
        <div>
            <button onClick={()=>{
                setCount((prev)=>prev+1);
            }}>INCREASE</button>
        </div>
    )
}
function Decrease(){
    const setCount=useSetRecoilState(count);
    return(
        <div>
            <button onClick={()=>{
                setCount((prev)=>prev-1);
            }}>DECREASE</button>
        </div>
    )
}
function Value(){
    const countValue=useRecoilValue(count);
    return <p>Count: {countValue}</p>;
}
export default Par;