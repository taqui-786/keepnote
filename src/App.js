import React, { useState , useEffect } from "react";
import Navbar from "./Navbar";
import Write from './write';
import ChangeBox from './Write-box'
import Notes from "./Note";

const localData = ()=> {
 
  return( localStorage.getItem("Newnote") !== undefined ? JSON.parse(localStorage.getItem("Newnote")) : [])
 }


function App() {
  const [note, setNote] = useState(localData)
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
        return [...prevData, [newData]];
      });
    }
    
}

useEffect(() => {
  localStorage.setItem("Newnote", JSON.stringify(note));
}, [note]);
function onDelete(indx) {
  setNote((prev) => {
    return prev.filter((val) => {
      return indx !== val[0].id;
    });
  });
}
// function selectedNote(id) {
//   const finded = note.find((elem) => {
//     return elem.id === id;
//   });

//   // console.log(finded)
// }




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
              title={val[0].title}
              content={val[0].content}
              key={val[0].id}
              id={val[0].id}
              deleteItem={onDelete}
              // selectedNote={selectedNote}
            />
          );
        })}
      </div>
 </>
  );
}

export default App;
