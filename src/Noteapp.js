import React from "react";
import { useState , useEffect } from "react";
import Navbar from "./navbar";
import ChangeBox from "./Write-box";

import Write from "./write";
import Notes from "./Note";




const localData = ()=> {
 
   return( localStorage.getItem("notes") !== undefined ? JSON.parse(localStorage.getItem("notes")) : null)
  }

const NoteApp = () =>{
  const [box, setBox] = useState(true);
  const [note, setNote] = useState(localData());

  function Change() {
   setBox(false);
  }
  /////////////////////////////////////////////////////////////////////////////////////
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
          return [{...prevData, newData}];
        });
      }
      console.log(note);
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
    const finded = note.find((elem) => {
      return elem.id === id;
    });

  }

  return (
    <>
      <Navbar/>
      {box ? <Write changeIt={Change} />:  <ChangeBox AddNote={AddNote}/>}

      <div className="note-page main">
        {note && note.map((val) => {
          return (
            <Notes
              title={val.title}
              content={val.content}
              Key={val.id}
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

export default NoteApp