import { useState } from "react";
export function Counter() {
    // o react só monitora a alteração dos estados
    // então para alterar uma variavel e aparecer ela na tela sem precisar reiniciar a aplicação
    // somente usando state 
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter +1);
    }

    return (
        <div>
            <h2>{counter}</h2>
                <button type="button" onClick={increment}>
                    Increment
                </button>       
        </div>
    );
}