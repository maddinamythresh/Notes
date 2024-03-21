import { modalContext } from "./Task";
import { useContext} from "react";
export default function Display({value}) {
  const cntx = useContext(modalContext);
  console.log("Entering Display")
  
  function handleDelete(index){
    let updated=[]
    updated=cntx.mode.map((ite,ind)=>{ 
       return (ind!=index ? [...ite]:undefined )
    }).filter(item => item !== undefined);
    cntx.deleteSet(updated)
  }
  function handleEdit(index){
    value= cntx.mode[index]
    console.log(cntx.oper)
    cntx.editSet(index)
  }
  

  return (
    <div id="content">
        {cntx.mode.map((item, index) => (
        <div key={index} id="content-body" >
            {item[0]}
            <button onClick={()=>{handleEdit(index)}}>Edit</button>
            <button onClick={()=>{handleDelete(index)}}>delete</button>
            </div>
      ))}
    </div>
  );
}
