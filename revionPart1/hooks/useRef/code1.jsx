// suppose we are making a input place holder for username and password and we want that if we click on the submit button then cursor will automatically goes to usename place holder it is focused;

// the simple way of doing this;

// function Focus() {
//   function focusOnUserName() {
//     document.getElementById("username").focus();
//   }

//   return (
//     <div>
//       <input id="username" type="text" placeholder="USER NAME" />
//       <input id="password" type="text" placeholder="Password" />
//       <button onClick={focusOnUserName}>Focus on Username</button>
//     </div>
//   );
// }

// export default Focus;


// it is working but it is very native and unOptimized way since we are doing react we avoid Dom manuplation as much as we can;
// import { useRef } from "react"
// function Focus(){
//     const inputRef=useRef(null);
//     function handleFocus(){
//         inputRef.current.focus()
//     }
//     return (
//         <div>
//             <input ref={inputRef} type="text" placeholder="USER NAME"/>
//             <input type="text" placeholder="PASSWORD"/>
//             <button onClick={handleFocus}>Click</button>
//         </div>
//     )
// }
// export default Focus  // it is an example of showing that userRef provides the refrence of the the DOM element; 

// from this we can define the useRef that it provides the refrence to a DOM element; -----> not a complete defination i have created by observing this case;


// USEREF -> creates the refrence of the value so that when the value changes it does not let the component to rerender;

// to create a variable in react there are basically three ways;
// 1-> raw variable      ------>>>>  let value=5  // very rarely used;
// 2-> state variable    ------->>>  const [value,setValue]=useState(5);
// 3->ref variable      -------->>>> const valueRef=useRef()

// BUILD A CLOCK USING START AND STOP FUNCTIONALITY AND TAKE EVERY CASE OF VARIABLE AND SHOW WHY REF VARIABLE IS VERY USEFUL HERE;


// 1-> using raw variable   -> HAVING PROBLEM DISCUSS IN DETAIL;

// import { useState } from "react";
// function Clock(){
//     const [time,setTime]=useState(0);
//     let timer=0;  // problem since we are using raw variable then whenever our component rerender then timer will initialize to zero hence clock will not stop;
//     function startClock(){
//         timer=setInterval(()=>{
//             setTime((prev)=>(prev+1))
//         },1000)// it returns the value and for clock stop we have to clear it so first using raw variable;
//     }// this function is called only when i click on the button thats why whenever the component rerender the function not call everytime that why we not use useEffect;
//     function stopClock(){
//         clearInterval(timer);
//         console.log(timer);
//     }
//     return (
//         <div>
//             <h1>Timer: {time}</h1>
//             <br/>
//             <button onClick={startClock}>START</button>
//             <br/>
//             <button onClick={stopClock}>STOP</button>
//         </div>
//     )
// }
// export default Clock


// 2-> USING STATE VARIABLE -> work but bad approch explained in detail;
// import { useState } from "react";
// function Clock(){
//     const [time,setTime]=useState(0);
//     const [timer,setTimer]=useState(null);
//     function startClock(){
//         // if(timer!=null) return;
//         const val=setInterval(()=>{
//             setTime((prev)=>(prev+1))
//         },1000)
//         setTimer(val);// setInterval is updating time after one second so our first rerender should be after first second;
//         // but when we use this approch there is one extra rerender setTimer(val) val is changing before one sec hence one extra rerender due to this;
//         // it give proble because in Clock we are showing variable time so whent it changes then only rerender shoulb happened because we are return this variable only;
//         // but one extra rerender at start due to setTimer(val) hence we have to minimize rerender;
//         // so we use here useRef hook
//     }
//     function stopClock(){
//         console.log(timer);
//         clearInterval(timer);
//     }
//     return (
//         <div>
//             <h1>Timer: {time}</h1>
//             <br/>
//             <button onClick={startClock}>START</button>
//             <br/>
//             <button onClick={stopClock}>STOP</button>
//         </div>
//     )
// }
// export default Clock


// 3 -> using useRef hook best approch for this------>>>
import { useState,useRef } from "react";
function Clock(){
    const [time,setTime]=useState(0);
    const timer=useRef(null);
    function startClock(){
        if(timer.current!=null) return;// already runnning do nothing;
        timer.current=setInterval(()=>{
            setTime((prev)=>(prev+1))
        },1000)
    }
    function stopClock(){
        clearInterval(timer.current)
        timer.current=null;
    }
    return (
        <div>
            <h1>Timer: {time}</h1>
            <br/>
            <button onClick={startClock}>START</button>
            <br/>
            <button onClick={stopClock}>STOP</button>
        </div>
    )
}
export default Clock







