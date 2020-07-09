import React, { useContext } from 'react'
import Countcontext from "./Countcontext";

export default function Child() {
    const countValue = useContext(Countcontext)
    return (
        <div>
            <h1>Called from Context Api value: {countValue[0]}</h1>
            <button onClick={()=>{countValue[1](countValue[0]+1)}}>Press to increment.</button>
        </div>
    )
}
