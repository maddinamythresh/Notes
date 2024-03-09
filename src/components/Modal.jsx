import {forwardRef} from "react";
import { useState } from "react";
import { useEffect } from "react";
export default forwardRef(function Modal({handles},ref) {
    const [val,setValue]=useState({title:"",description:""})
    useEffect(() => {
        if (ref.current) {
          // Reset the state when the modal is opened
          setValue({ title: "", description: "" });
        }
      }, [ref]);    
    function handle(textType, value) {
            setValue((previous) => ({
              ...previous,
              [textType]: value
            }));
          }
      console.log("Entered Modal");
  
  return (
    <dialog ref={ref}>
     
      <input placeholder="Title" id="title" onChange={(event)=>handle("title",event.target.value)}  value={val.title} required/>
      <div>
      <textarea rows="25" cols="50" value={val.description} style={{textWrap:"wrap" , width:"auto" }} onChange={(event)=>handle("description",event.target.value)} required/>
      </div>
      
        <button onClick={()=>handles(val)} >Save</button>
        <form method="dialog" >
        <button >Cancel</button>
      </form>
      
      
    </dialog>
  );
})
