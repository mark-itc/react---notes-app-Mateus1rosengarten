import { useState } from 'react';
import NotesList from './NotesList';

function AddNotesComponent(){                                           //// ADD NOTES COMPONENT
    const [result,setResult] = useState([]);                             //// STATE DECLARAMENT
  
    const addNote = () => {                                            //// BUTTON HANDLER

      const months = [
        'Jan','Fev','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
      ]  
      let date = new Date();
      let daydate = date.getDate()
      let monthdate = months [date.getMonth()]
      let hourdate = date.getHours()
      let minutedate = date.getMinutes()
      let format = hourdate >= 12 ? 'PM' : 'AM'
      
      let shortdate =  monthdate  +' ' + daydate + 'th'  + " " + hourdate + ":" + minutedate + ' ' + format;
      
      const newItem = 'Example note ' + '(' + shortdate + ')';
      setResult([...result,newItem])                                  //// CHANGING STATE
  
    }
  
  
    
    const closeNoteHandle = (noteID) => {    
      // console.log('key:',key) 
      console.log('index',noteID)                                  //// CODE THAT DELETE SPECIFIC RESULT
    const promptmessage = window.confirm('Are you sure you want to delete your note?')
     result.splice(noteID,1)
     {promptmessage && setResult([...result])}
      
    }
  
  
    
    return(                                                       ///// JSX RETURN
      <>
      <div className='notebox'>
        <h1  className='h1style'>Add Notes APP</h1>
        
        <button className='addbutton' onClick={addNote}>Add</button>
      </div>
      <div className='resultdiv'>
      {result.map((item,index) =>(<NotesList
      key={item + index.toString()}
      noteIndex = {index}
      noteText={item}
      deleteHandler={closeNoteHandle}
       />
      ))}
      </div>
     </>  
    )
  }

  export default AddNotesComponent