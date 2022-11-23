import { useContext } from 'react';
import NotesList from './NotesList';
import FormComponent from './FormComponent';
import { varContext, var2Context, resultContext } from '../App';

function AddNotesComponent() {

  const { title, setTitle } = useContext(varContext)
  const { text, setText } = useContext(var2Context)
  const { result, setResult } = useContext(resultContext)


  const addNote = () => {

    const newItem = { txt: text + '(' + settingDate() + ')', titl: title };


    text && setResult([...result, newItem])

  }
  const settingDate = () => {
    const months = [
      'Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    let date = new Date();
    let daydate = date.getDate()
    let monthdate = months[date.getMonth()]
    let hourdate = date.getHours()
    let minutedate = date.getMinutes()
    let format = hourdate >= 12 ? 'PM' : 'AM'

    let shortdate = monthdate + ' ' + daydate + 'th' + " " + hourdate + ":" + minutedate + ' ' + format;

    return shortdate
  }

  const HandleTitle = (e) => setTitle(e.target.value);


  const HandleText = (e) => setText(e.target.value);




  const closeNoteHandle = (noteID) => {
    const promptmessage = window.confirm('Are you sure you want to delete your note?');
    result.splice(noteID, 1);
    { promptmessage && setResult([...result]) };

  }




  return (
    <>

      <FormComponent onTitle={HandleTitle} onText={HandleText} onNote={addNote} />

      <div className='resultdiv'>
        {result.map((item, index) => (<NotesList
          key={item + index}
          noteIndex={index}
          noteTitle={item.titl}
          noteText={item.txt}
          deleteHandler={closeNoteHandle}

        />
        ))}
      </div>

    </>
  )
}

export default AddNotesComponent