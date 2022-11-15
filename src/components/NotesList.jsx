

import { useState } from 'react';

function NotesList({noteText,noteIndex,deleteHandler}){   
  console.log(noteIndex)                     //// LIST COMPONENT
  const [modal,setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal)
  }

  return(  /// JSX RETURN ELEMENTS RESULTS
    <div className='container'> 
                                      
    <span className='element'><h4 onClick={toggleModal}  className='elementtitle'>NOTE TITLE</h4>
    {modal &&(
    <div className='modal'>
      <div onClick={toggleModal} className='overlay'>
        <div className='modal-content'>
          <span className='elementmodal'><h4 className='titlemodal'>NOTE TITLE</h4>
          {noteText}<button onClick={toggleModal} className='closebutton'>x</button></span>
        </div>
      </div>
    </div>
      
    
    )}<span onClick={toggleModal}  style={{fontSize:'14px',margin:'4px'}}>{noteText}</span><button onClick={() => deleteHandler(noteText,noteIndex)} className='closebutton'>x</button>
    
    </span>
    </div>
    )
}

export default NotesList