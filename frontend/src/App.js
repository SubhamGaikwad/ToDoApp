import { useEffect, useState } from 'react';
import { AddToDo,updateToDo,deleteToDo} from './utils/HandleApi';
import ToDo from './components/ToDo';
import './App.css';

import { getAllToDo } from './utils/HandleApi';
function App() {
  const [toDo, setToDo] = useState([])
  const [text,setText] = useState("")
  const [iseUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  useEffect(()=>{
    getAllToDo (setToDo)
  },[])

  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div className="App">
     <div className="container">
     <h1>ToDo App</h1>
     <div className="ToDo">
     <input 
     type="text" 
     placeholder="Add ToDo..."
     value={text}
      onChange={(e)=>setText(e.target.value)}
     />
     <div className="add" 
     onClick={iseUpdating ? () =>updateToDo(toDoId,text,setText,setToDo,setIsUpdating) :() => 
     AddToDo(text,setText,setToDo)}>
     {iseUpdating ? "update" :"Add"}</div>
     </div>
     <div className="list" >
      {toDo.map((item)=> 
      <ToDo key={item._id} 
      text={item.text}
      updateMode = {()=> updateMode(item._id,item.text)}
      deleteToDo={()=>deleteToDo(item._id,setToDo)}/>)}
     </div>
     </div>
    </div>
  );
}

export default App;
