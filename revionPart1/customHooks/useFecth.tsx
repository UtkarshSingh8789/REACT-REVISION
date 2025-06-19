// DEFINATION OF CUSTOM HOOKS;

// A Custom Hooks is your own Reusable hoooks that uses react hooks inside like (useState,useEffect);
// convention-> Always start the name with use;
//              Returns data or functions just like built-in hooks
//              Helps avoid code duplication


// USE CASES;
// 🔶 Why Do We Need Custom Hooks?
// Imagine this:
// You have 5 components all fetching data from an API using useEffect and useState.
// Would you write the same code 5 times?

// ❌ NO. That’s repetition and error-prone.
// ✅ Instead: Write one custom hook and reuse it.

// 🔑 Custom Hooks help with:
// Code Reusability

// Cleaner Components

// Separation of Concerns

// Testing becomes easier

//1. useFetch hooks;

import { useState,useEffect } from "react";

function useFetch(url:string){
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    const [error,setError]=useState<Error | null>(null);
    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                setLoading(true);
                const response=await fetch(url);
                const result=await response.json();
                setData(result);
            } catch (error) {
                setError(error as Error);
            } finally{
                setLoading(false);
            }

        }
        fetchData();
    },[url])
    return {loading,data,error}
}
export default useFetch