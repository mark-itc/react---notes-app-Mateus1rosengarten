
import { useState } from 'react';
import NotesList from './NotesList';

function AddNotesComponent(){                                           
    const [result,setResult] = useState([]);                             
  
    const addNote = () => {                                            

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
      setResult([...result,newItem])                                 
  
    }
  
  
    
    const closeNoteHandle = (noteID) => {    
      // console.log('key:',key) 
      console.log('index',noteID)                                  
    const promptmessage = window.confirm('Are you sure you want to delete your note?')
     result.splice(noteID,1)
     {promptmessage && setResult([...result])}
      
    }
  
  
    
    return(                                                      
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
