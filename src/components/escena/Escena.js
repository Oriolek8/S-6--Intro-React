import { Caixa} from "../../styled"

function Escena(props){
    
    return(
        
            < Caixa isActive={props.isActive}  key={props.index} >{props.frase}</ Caixa>   
    )
}

export default Escena
