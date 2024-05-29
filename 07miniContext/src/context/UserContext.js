import React, { createContext } from "react";


const userContext = createContext(); // In the createContext(), we can use the some values.

export default userContext;

/************************ Basic Notes *********************************

Every context is a provider so here ,User context is a provider so we have to wrapped it.
If you create a context then you have to make a context provider

Suppose:
<userContext>
    <login>
        <databse />
    </login>
</userContext>
 
So, above it shown that it provides the above data which is wrapped it.

*/