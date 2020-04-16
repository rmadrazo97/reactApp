import React from "react"



function ConditionalChild(props) {
    // initially ir renders as true, and xSeconds later it re-renders with false
    console.log(props.isLoading);

    if (props.isLoading === true) {
        return (
            < h3 > Loading ...</h3 >
        )
    } else {
        return (
            <h2> Loaded!</h2>
        )
    }

    /* 
    // PRO WAY OF DOING IT:
        return (
        props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>
        )
    */


}

export default ConditionalChild
