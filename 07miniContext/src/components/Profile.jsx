import React,{useContext} from "react";
import userContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(userContext)

    if(!user) return <h4>Please login</h4>
    return <div>Good to see you!   {user.username} </div>
}

export default Profile;