import React, { useState } from "react";
import { AiFillFileAdd } from 'react-icons/ai';




function ChangeBox(props) {
const [data , setData] = useState({
  title:"",
  content:"",
})
function Change(event){
const value = event.target.value;
const name = event.target.name;
setData((prevData) =>{
  return{
    ...prevData,
[name] : value
  }
})

}
const addEvent= ()=>{
props.AddNote(data)
setData({
  title:"",
  content:"",
})
}




  return (
    <>
      <div className="type-box main" onDoubleClick={props.changeNewBox}>
        <div className="type2">
          <input
          name="title"
         
            type="text"
            placeholder="Title"
            id="title"
            onChange={Change}
            value={data.title}
          />
          <textarea
            placeholder="Write your notes...."
            name="content"
            id="takeNote"
            cols=""
            rows=""
            onChange={Change}
            value={data.content}
          ></textarea>
        <button className="btn" title="Add Button" onClick={addEvent}>
            <AiFillFileAdd/>
            </button>
        
        </div>
      </div>
    </>
  );
}


  export default ChangeBox

 