import React, { useState , useEffect } from "react";
import Navbar from "./Navbar";
import Write from './write';
import ChangeBox from './Write-box'
import Notes from "./Note";

const localData = ()=> {
 
  return( localStorage.getItem("notes") !== undefined ? JSON.parse(localStorage.getItem("notes")) : null)
 }


function App() {
  const [note, setNote] = useState(localData())
  const [box,setBox] = useState(true)
const NewBox = () =>{
  setBox(false)
}
const OldBox = () =>{
  setBox(true)
}

function AddNote(data) {
  if (!data.title && !data.content) {
    alert("Please enter any data....");
  } else {
     return setNote((prevData) => {
       const newData = {
         id: new Date().getTime().toString(),
         title: data.title,
         content: data.content,
        }
        return [...prevData, newData];
      });
    }
    
}

useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(note));
}, [note]);
function onDelete(indx) {
  setNote((prev) => {
    return prev.filter((val) => {
      return indx !== val.id;
    });
  });
}
function selectedNote(id) {
  note.find((elem) => {
    return elem.id === id;
  });

}





  return (
    <>
    <Navbar/>
 { 
 box? <Write  changeIt={NewBox}/> : <ChangeBox changeNewBox={OldBox} AddNote={AddNote}/> 
 }
 <div className="note-page main">
        {note && note.map((val) => {
          return (
            <Notes
              title={val.title}
              content={val.content}
              key={val.id}
              id={val.id}
              deleteItem={onDelete}
              selectedNote={selectedNote}
            />
          );
        })}
      </div>
 </>
  );
}

export default App;
