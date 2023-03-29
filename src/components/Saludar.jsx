import {useState} from "react";
import {Input} from "antd";
import {UserOutlined, SearchOutlined} from "@ant-design/icons";

function Saludar(props) {
    const Saludando = (e) => {
        let nuevoNombre = e.target.value
        setName(nuevoNombre)
    }

    const [name, setName] = useState('Mundo')

    return (
        <>
            <Input onChange={Saludando} type={"text"} prefix={<SearchOutlined/>} size={"large"}
                   placeholder="Escribe tu nombre "/>
            <h2>Hola {name}</h2>
        </>
    )
}

export default Saludar