import React from "react";
import { GrNotes } from 'react-icons/gr';
function Navbar(){
 return (  <>
    <nav>
        <div className="main">
        <div className="logo">
          <span><GrNotes/> Keep Notes</span> 
        </div>
        </div>
    </nav>
    </>)
}
export default Navbar;