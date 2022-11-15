import './App.css';
import { useState } from 'react';

function NotesList({noteText,deleteHandler}){                       

  return( 
    <div style={{display:'inline', flexDirection:'row'}}> 
                                      
    <span style={{display:'inline-block', border:'1px solid',margin:'10px',fontWeight:'bold'}}>{noteText}</span>
   
 
    </div>
    )
}


function AddNotesComponent(){                                           
  const [result,setResult] = useState([]);                            

  const addNote = () => {                                            
    let date = new Date();
    let daydate = date.getDate()
    let monthdate = date.getMonth()
    let hourdate = date.getHours()
    let minutedate = date.getMinutes()
    let secondsdate = date.getSeconds()
    let shortdate = daydate + "/" + monthdate + " " + hourdate + ":" + minutedate + ":" + secondsdate;

    const newItem = 'Example note ' + '(' + shortdate + ')';
    setResult([...result,newItem])                                  

  }

  
  return(                                                       
    <>
    <div style={{backgroundColor:'#E1FFEE',height:'30vh',width:'30vw',marginLeft:'450px',border:'2px solid'}}>
      <h1 style={{textAlign:'center'}}>Add Notes APP</h1>
      
      <button style={{position:'relative',top:'125px',width:'432px'}} onClick={addNote}>Add</button>
    </div>
    <div style={{position:'absolute',top:'250px',left:'300px',width:'60vw'}}>
    {result.map((item,index) =>(<NotesList
    key={item + index.toString()}
    noteText={item}
    
     />
    ))}
    </div>
   </>  
  )
}



function App() {                                                        
  return (
   <>
   <div style={{backgroundColor: '#B4CDE6', height:'100vh'}}>
    <AddNotesComponent />
   </div>
   </>
  );
}

export default App;
