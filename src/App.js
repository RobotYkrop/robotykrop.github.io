import './App.css';
import Modal from "./Components/Nalog";
import React, {useState} from "react"


function App() {
    const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
        <main>
            <button className="HomeButton" onClick={() => setModalActive(true)}>Налоговый вычет</button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </main>

    </div>
  );
}

export default App;
