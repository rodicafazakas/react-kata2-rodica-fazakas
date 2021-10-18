
import './App.css';
import Input from './Input.js';
import Button from './Button.js';
import {useState} from "react";


/* Responsabilidades 
App:
- renderizar el input y dos botones
- almacenar el valor numerico
- incrementar el valor (hasta 10)
- decrementar el valor (hasta 0)
- pasarle el valor numerco al input
- pasarle las operaciones a los butones

Input:
- renderizar un input
- mostrar un valor

Button
- renderizar un botton
- mostrar un texto recibido
- execitar la accion recibida al clicarlo

*/
function App() {
  const [valor, setValor] = useState(0);

  const increment = (valor) => {
    setValor( valor + 1) ;
  }

  const decrement = (valor) => {
    setValor( valor - 1);
  }

  return (
    <>
      <Button text="-" actionOnClick={decrement} />
      <Input valor = {0} />
      <Button text="+" actionOnClick={increment} />
    </>  
  );
}

export default App;
