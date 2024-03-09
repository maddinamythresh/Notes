import { useRef, useState } from "react";
import Modal from "./Modal";
export default function Task() {
  const [data,setData]=useState([])  
  const ref = useRef();
  function handleClick() {
    ref.current.showModal();
  }
  function handleData(val){
    console.log("hello");
    setData((previous)=>{
        let updated=[]
        for(const c of previous){
            
        }
        return updated;
    })
    ref.current.close();
  }

  console.log("Task playing");
  return (
    <div>
      <Modal ref={ref} handles={handleData}/>
      <div id="card">
        <p>Add Task</p>
        <button onClick={handleClick}> +</button>
      </div>
    </div>
  );
}
