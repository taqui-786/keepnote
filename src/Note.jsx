import React from "react";
import { MdDelete } from 'react-icons/md';
function Notes(props) {
  function Delete(){
    props.deleteItem(props.id)
  }

  return (
    <>
     
        <div className="note-box" >
          <h3>{props.title}</h3>
          <br/>
      <p>
      {props.content}
        </p>
          <button className="delete" title="Delete Button" onClick={Delete}><MdDelete/></button>
       
        </div>
    
    </>
  );
}
export default Notes;
