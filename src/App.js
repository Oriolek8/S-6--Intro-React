import React,{useState} from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import {Container, Boton, BotonBienvenida, Pantalla} from "./styled"
import frasesData from './components/escena/frasesData';

export default function App(){
  const[count, setCount] = useState(0)
  const[showBoton, setShowBoton]= useState(false)
    
  function boton_bienvenida(){
    setShowBoton(prevShowBoton => !prevShowBoton)
  }

  function anterior(){
      const countc = count -1
      setCount( countc )  
  }

  function siguiente(){
      const countc = count + 1
      setCount( countc ) 
  }
     
    
 const fraseElement = frasesData.map((frase,index) => {
  
   return (
      <Escena
        key={index}
        frase ={frase}
        isActive={ count === index }
      />
   )
   
   })
   
   
  return (
    <Pantalla>
      
        {
        showBoton 
        ? 
          <div>
              <Boton onClick={anterior}>Anterior</Boton>
              <Boton onClick={siguiente}>Siguiente</Boton>

              <Container>
                {fraseElement}
              </Container>
          </div> 
        : 
        <BotonBienvenida onClick={boton_bienvenida}>Començar</BotonBienvenida>
        }

    </Pantalla>
   
  );
}

