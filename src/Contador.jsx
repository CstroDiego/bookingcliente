import {useState} from "react";
import {Button} from 'antd'

function Contador() {
    const [count, setCount] = useState(0);

    const contar = () => {
        setCount(count + 1);
    }
    return (<div>
        <Button onClick={contar} type={"primary"} size={"middle"}>Click {count}</Button>
        <h3>#{count}</h3>
    </div>)
}

export default Contador
