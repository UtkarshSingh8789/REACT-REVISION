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

// function useFetch(url:string){
//     const [loading,setLoading]=useState(true);
//     const [data,setData]=useState(null);
//     const [error,setError]=useState<Error | null>(null);
//     useEffect(()=>{
//         const fetchData=async ()=>{
//             try {
//                 setLoading(true);
//                 const response=await fetch(url);
//                 const result=await response.json();
//                 setData(result);
//             } catch (error) {
//                 setError(error as Error);
//             } finally{
//                 setLoading(false);
//             }

//         }  
//         fetchData(); // we are using async funtion to feth the api so we have to call this function;
//     },[url])
//     return {loading,data,error}
// }
// export default useFetch


// METHOD-2 USING INLINE FETCH 



function useFetch(url:string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;