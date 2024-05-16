import React from "react";
import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data=useLoaderData();

    // ****************** Traditional Method *******************************
    // const [data,setData] = useState([]);
    // useEffect(() =>{
    // fetch('https://api.github.com/users/mauryaanuj-11')
    // .then((res) => res.json())
    // .then((res) => setData(res))
    // }, [])
    
    return (
        <div className="bg-gray-700 text-white text-2xl p-4 m-4 center" >
                Follwers : {data.following}
                <img src={data.avatar_url} alt="git-hub-images" width={300}/>
        </div>
    )
}

export const gitHunInfo=async () => {
    const apiData = await fetch('https://api.github.com/users/mauryaanuj-11')
    return apiData.json();
}

export default Github;