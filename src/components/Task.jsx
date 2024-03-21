import { useState,createContext, useCallback} from "react";
import Modal from "./Modal.jsx";
import Display from "./Display.jsx";
export const modalContext=createContext()


let oper=[null,null,null]
export default function Task(){
  
  const [val,setVal]=useState([])
  const [modal,setModal]=useState(false)
  function handleAddNote(){
    setModal((mo)=>{return !mo});
  }
  function handleVal(value){
    setVal((previous)=>{return [value,...previous]})  
  }
  function handleDelete(value){ 
    setVal(value)
  }
  function handleEdit(index){
    oper=[...val[index]]
    oper.push(index)   
    handleAddNote()
  }
  function handleoper(){
    oper=[null,null,null]

  }

  const p={
    editSet:handleEdit,valSet:handleVal,modSet:handleAddNote,mode:val,opSet:handleoper,deleteSet:handleDelete
  }
  console.log("Task loading");
  console.log(val);

  return(
  <modalContext.Provider value={p}>
    {modal && <Modal values={oper}/>}
   <button onClick={handleAddNote}>+</button>
   {!modal &&<Display value={oper} />}
  </modalContext.Provider>)
}