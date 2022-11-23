import { useState, useContext } from 'react';


function NotesList({ noteText, noteIndex, deleteHandler, noteTitle }) {



  const [modal, setModal] = useState(false);


  const toggleModal = () => setModal(!modal)

  return (
    <div className='container'>
      <span className='element'> <h4 onClick={toggleModal} className='elementtitle'>{noteTitle}</h4>
        {modal && (

          <div className='modal'>
            <div className='overlay'>
              <div className='modal-content'>


                <span className='elementmodal'><h4 className='titlemodal'>{noteTitle}</h4>
                  {noteText}<button onClick={toggleModal} className='closebutton'>x</button></span>
              </div>
            </div>
          </div>




        )}<span onClick={toggleModal} style={{ fontSize: '14px', margin: '4px' }}>{noteText}</span><button onClick={() => deleteHandler(noteIndex)} className='closebutton'>x</button>

      </span>
    </div>
  )
}



export default NotesList