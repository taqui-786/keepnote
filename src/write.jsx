import React from "react";
function Write(props){
    return(
        <>
 <div className="type-box main" onClick={props.changeIt}>
        <div className="type">
          <h4> Write a note.....</h4>
        </div>
      </div>
        </>
    )
}
export default Write;