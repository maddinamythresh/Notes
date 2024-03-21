import Task from "./components/Task";
import Header from "./components/Header.jsx";
import { createContext } from "react";
 export const ModalContext=createContext({title:null,description:null})
export default function App() {
    
    return (
    <>
    <Header />
    <Task />
    
    </>
 
  );
}

