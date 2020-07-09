import React, { useReducer } from 'react'
import countReduce from "./countReduce.js";

function child2(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let [state,dispatch] = useReducer(countReduce,0);
    return (
        <div>
            <h1>The value for reducer: {state}</h1>
            <button onClick={() => {dispatch("increment")}}>Click me</button>
        </div>
    )
}
export default child2;