
import './App.css';
import { useState } from 'react';


function NotesList({noteText,deleteHandler}){                        //// LIST COMPONENT

  return(  /// JSX RETURN ELEMENTS RESULTS
    <div style={{display:'inline', flexDirection:'row'}}> 
                                      
    <span style={{display:'inline-block', border:'1px solid',margin:'10px'}}><h4 style={{textAlign:'center',fontWeight:'bold'}}>NOTE TITLE</h4>{noteText}<button onClick={() => deleteHandler(noteText)} style={{border:'1px solid',borderRadius:'50%',width:'20px',height:'20px',marginTop:'5px'}}>x</button>
    
    </span>
    </div>
    )
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function AddNotesComponent(){                                           //// ADD NOTES COMPONENT
  const [result,setResult] = useState([]);                             //// STATE DECLARAMENT

  const addNote = () => {                                            //// BUTTON HANDLER
    let date = new Date();
    let daydate = date.getDate()
    let monthdate = date.getMonth()
    let hourdate = date.getHours()
    let minutedate = date.getMinutes()
    let secondsdate = date.getSeconds()
    let shortdate = daydate + "/" + monthdate + " " + hourdate + ":" + minutedate + ":" + secondsdate;
    
    const newItem = 'Example note ' + '(' + shortdate + ')';
    setResult([...result,newItem])                                  //// CHANGING STATE

  }


  
  const closeNoteHandle = (itemDelete) => {                                       //// CODE THAT DELETE SPECIFIC RESULT
  const promptmessage = window.confirm('Are you sure you want to delete your note?')
  const itensNotDeleted = result.filter((element) => element !== itemDelete )
   {promptmessage && setResult(itensNotDeleted)}
    
  }


  
  return(                                                       ///// JSX RETURN
    <>
    <div style={{backgroundColor:'#E1FFEE',height:'30vh',width:'30vw',marginLeft:'450px',border:'2px solid'}}>
      <h1 style={{textAlign:'center'}}>Add Notes APP</h1>
      
      <button style={{position:'relative',top:'145px',width:'432px'}} onClick={addNote}>Add</button>
    </div>
    <div style={{position:'absolute',top:'250px',left:'300px',width:'60vw'}}>
    {result.map((item,index) =>(<NotesList
    key={item + index.toString()}
    noteText={item}
    deleteHandler={closeNoteHandle}
     />
    ))}
    </div>
   </>  
  )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function App() {                                                        //// RENDER ROOT COMPONENT
  return (
   <>
   <div style={{backgroundColor: '#B4CDE6', height:'100vh'}}>
    <AddNotesComponent />
 
   </div>
   </>
  );
}

export default App;
