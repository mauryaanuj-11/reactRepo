import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(userContext);

    const clickHandler = (e) => {
        e.preventDefault();
        setUser({username,password});
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name" />
            {" "}
            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your name" /><br />
            <button type="submit" onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default Login;