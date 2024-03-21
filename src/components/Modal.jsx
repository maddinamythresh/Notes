import {useEffect, useRef,useContext} from "react";
import { modalContext } from "./Task";

export default function Modal({values}){
  let cntx=useContext(modalContext);
  console.log(cntx)
  let refer=useRef();
  let title=useRef();
  let description=useRef();
  useEffect(()=>{
    refer.current.showModal();
    
  },[])
  console.log("Modal");
  console.log(values);
  
  function handle(index){
    cntx.mode[index][0]=title.current.value;
    cntx.mode[index][1]=description.current.value;
    cntx.opSet()
    cntx.modSet()
    
  }
  function handlese(){
   cntx.valSet([title.current.value,description.current.value])
   cntx.modSet()

  }
  
  return (
    <dialog ref={refer}>
    
      <input type="text"  ref={title} placeholder="Title" id="title" defaultValue={values[0]} required/>
      <textarea row="50"  ref={description} id="note-body"  defaultValue={values[1]} required/>
      
      <form method="dialog" >
      <button onClick={(values[0] != null ? () => handle(values[2]) : () => handlese())}>
  Save
</button>
          <button >Cancel</button>
      </form>
    </dialog>
  )
}