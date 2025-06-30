// it is the best way of doing state mangement for large app;

// theory part;
// REDUX;
// Redux is a state management library that helps:
// Manage global state (like user info, theme, cart, etc.)
// Make state predictable and consistent across components
// Share state between non-related components
// Great for handling APIs, authentication, loading/error states

// REDUX TOOLKIT
// Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies:
// Writing reducers
// Creating stores
// Managing async logic (createAsyncThunk)
// Avoiding boilerplate code


// ALL FUNDAMENTAL OF REDUX;

// | Concept      | Description                                    |
// | ------------ | ---------------------------------------------- |
// | **Store**    | Central state container                        |
// | **Slice**    | A part of the state and the logic to handle it |
// | **Reducer**  | Logic to update state based on actions         |
// | **Action**   | Event that tells Redux what to do              |
// | **Dispatch** | Sends an action to Redux                       |
// | **Selector** | Reads specific state from the store            |

import React from "react";
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
// redux is used when multiple components need to access or update share data;
// 1-> create slices;
const counterSlice=createSlice({
    // slice is  section of your gobal reduxstate and its logic (actions+reducers);
    name:"counter",
    initialState:{count:0},
    reducers:{
        increment: (state)=>{state.count+=1},
        decrement: (state)=>{state.count-=1},
    },
});
const {increment,decrement}=counterSlice.actions;
//2 create stores;
const store=configureStore({
    // it is a global container for your application state;
    // it accept reducers,middleware,devTools setup by default;
    reducer:{
        counter:counterSlice.reducer
    },
})
function Increase(){
    // useDispatch is a hook that returns dispatch function needs to send actions to redux store;
    const dispatch=useDispatch()
    return <button onClick={()=>dispatch(increment())}>INCREASE</button>;
}
function Decrease(){
    const dispatch=useDispatch()
    return <button onClick={()=>dispatch(decrement())}>DECREASE</button>;
}
function Value(){
    // useSelector is a hook that is used to access redux state in he functional Component;
    const count=useSelector((state)=>state.counter.count);
    return <p>Count: {count}</p>;
}
const CounterApp = () => {
  return (
    // provider come from react redux to provide global store to all components in your app;
    <Provider store={store}>
      <Increase />
      <Decrease />
      <Value />
    </Provider>
  );
};

export default CounterApp;