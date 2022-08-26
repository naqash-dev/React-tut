import React from "react";
function Passfunprops(props){

    return(
        <div>
            <h1>Pass function as Props</h1>
            {/* <button onClick={()=>props.data()}>Call data Function</button> */}
            <button onClick={props.data}>Call data Function</button>
        </div>
    )
}


export default Passfunprops;