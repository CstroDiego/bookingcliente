import {Button, Form, Input, Select} from "antd";
import {useState} from "react";

function CreateUser() {
    const [formUsuario, setFormUsuario] = useState({
        email: "",
        password: "",
        nombre: "",
        telefono: "",
        pais: "",
        estado: "",
        ciudad: "",
        direccion: ""
    })

    const formChange = (e) => {
       const name = e.target.name
         const value = e.target.value
         setFormUsuario({...formUsuario, [name]: value})
    }

    const seEnvioForm = (e) => {
        e.preventDefault()
        console.log("Formulario enviado")
    }

    return (
        <>
            <h1>Registro</h1>
            <Form onSubmit={seEnvioForm}>
                <Input type="text" name={"email"} placeholder={"Email"} onChange={formChange}/>
                <Input type="password" name={"password"} placeholder={"password"} onChange={formChange}/>
                <Input type="text" name={"nombre"} placeholder={"Nombre"} onChange={formChange}/>
                <Input type="text" name={"telefono"} placeholder={"Telefono"} onChange={formChange}/>
                <Input type="text" name={"pais"} placeholder={"pais"} onChange={formChange}/>
                <Input type="text" name={"estado"} placeholder={"estado"} onChange={formChange}/>
                <Input type="text" name={"ciudad"} placeholder={"ciudad"} onChange={formChange}/>
                <Input type="text" name={"direccion"} placeholder={"direccion"} onChange={formChange}/>
                <Button type={"primary"} htmlType={"submit"}>Enviar</Button>
            </Form>

            <p>Email: {formUsuario.email}</p>
            <p>Nombre: {formUsuario.nombre}</p>
            <p>Telefono: {formUsuario.telefono}</p>
        </>
    )
}

export default CreateUser