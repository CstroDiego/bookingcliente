import {useState} from 'react'
import './App.css'
import Contador from './Contador'
import Saludar from "./components/Saludar.jsx";
import CreateUser from "./components/CreateUser.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (<>
        <CreateUser/>
    </>)
}

export default App
