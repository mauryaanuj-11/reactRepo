import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {user_id} = useParams()
    return (
        <>
        <div className="bg-gray-800 text-white text-3xl p-4 m-4 flex center">User : {user_id}</div>
        </>
    )
}

export default User;