// you have given an interval and url as input make a custom hook to fetch first and after every given interval refetch it;

import { useEffect,useState } from "react";
function useFetch(url ,interval){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true);
            try {
                const response=await fetch(url);
                const result=await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
        if(interval!=null){
            const fetchInterval=setInterval(()=>{
                fetchData();
            },interval)
            return ()=>{
                clearInterval(fetchInterval)// clear interval on cleanUp;
            }
        }
    },[url,interval])
    return {data,loading,error}
}
export default useFetch