// 1-> LEARNING ABOUT USE STATE HOOK;
// useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.
// import { useState } from "react"
// function App() {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       <p>counter :{count}</p>
//       <button onClick={()=>{
//         setCount((val)=>val+1);
//       }}>Increase</button>
//     </div>
//   )
// }
// export default App
// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <ToggleMessage />
//       <ToggleMessage />
//       <ToggleMessage />
//     </div>
//   )
// }

// // the component APP isnt re-rendering
// // because we havent used a state variable

// const ToggleMessage = () => {
//   let [notificationCount, setNotificationCount] = useState(0);
//   console.log("re-render");
//   function increment() {
//     setNotificationCount(notificationCount + 1);
//   }
//   return (
//       <div>
//           <button onClick={increment}>
//               Increase count
//           </button>
//           {notificationCount}
//       </div>
//   );
// };
// export default  App

/// CONCEPT OF USEEFFECT;
// import { useEffect, useState } from "react";

// function App() {
//   const [count,setCount]=useState(0);
//   // setInterval(()=>{
//   //   setCount((prev)=>prev+1)
//   // },1000)
//   // problems because whenever the count changes it rerenders the App componenet and 
//   useEffect(()=>{
//     setInterval(()=>{
//       setCount((prev)=>prev+1)
//     },1000)
//   },[])
//   return(
//     <div>
//       <div> counter: {count}</div>
//     </div>
//   )
// }
// export default App;

// USE EFFECT HOOK CONCEPT

// import React from "react";
// import EffectHook from "../hooks/useEffect.jsx";
// function App() {
//   return (
//     <>
//     <div>
//       <EffectHook/>
//     </div>
//     </>
//   )
// }
// export default App;

// USEREF CONCEPT IN DETAIL

// import React from "react";
// import Clock from "../hooks/useRef/code1.jsx";
// function App() {
//   return (
//     <>
//     <div>
//       <Clock/>
//     </div>
//     </>
//   )
// }
// export default App;


// USEPREV HOOK -> CUSTOM HOOKS;

// import React, { useState } from "react";
// import usePrev from "../customHooks/usePrev.jsx";
// function App() {
//   const [count,setCount]=useState(0);
//   const prevCount=usePrev(count);// let me explain how this work first usePrev(0) we know that in react first there will return then effect will call;
//   // hence for usePrev(0) return null then effect will call and ref.current=1 now if we increase count app component rerender and usePrev(1)
//   // first return then return ref.current=0 and now effect will run ref.current=1 now .. similarly working;
//   // note why we use dependecies in useEffect in usePrev custom hook because if we not use then if there is change in value then useEffect will not run because it doesnot have any dependencies;
//   // to make useEffect run on every change of value useEffect should depend upon value;
//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter with usePrev Hook</h1>
//       <p>Current Count: {count}</p>
//       <p>Previous Count: {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
//     </div>
//   )
// }
// export default App;


import Parent from "../contextApi/rollingUpTheStates.jsx";
function App(){
  return (
    <div>
      <Parent/>
    </div>
  )
}
export default App;


