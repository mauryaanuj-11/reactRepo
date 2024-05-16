import { useState,useEffect } from "react"


const useCurrencyInfo = function(currency){
    const [data,setData] = useState({});  // ({}) here we put the null for the optimization of the program
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => res.json())    // Here it is used because we know that it return the string, we have to convert into the json file.
        
        .then( (res) => setData(res[currency]))
        console.log(data)
    },[currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;