import "./App.css";
import Modal from "./Modal/Modal";
import {useState} from "react";

function App() {
  const [show,setShow] = useState(false);
  const handleBtn=()=>{
    setShow(true);
    
  }
  const handleReturn=()=>{
    setShow(false);
  }
  return (
    <>
    <div className="app-2">
<button onClick={handleBtn} className="App">Save</button>
    </div>
    {
      show && <Modal handleReturn={handleReturn}/>
    }
    </>
  );
}

export default App;
