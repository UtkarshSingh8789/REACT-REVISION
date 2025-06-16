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
import React from "react";
import EffectHook from "../hooks/useEffect.jsx";
function App() {
  return (
    <>
    <div>
      <EffectHook/>
    </div>
    </>
  )
}
export default App;

