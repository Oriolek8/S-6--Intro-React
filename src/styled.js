import styled from "styled-components";

    export const Container = styled.div`
        margin-top:20px;
        text-align: center;
    `;
    export const Boton = styled.button`
        width: 50%;
        height:60px;
        font-size:17px

    `;

    export const Caixa = styled.div`
    width: 98%;
    margin: 10px;
    border: 2px solid black;
    border-radius: 8px;
    padding: 14px;
    background-color: ${( {isActive}) => isActive ? '#FFC0CB' : '#FFFFFF'}; 
    `;

    export const BotonBienvenida = styled.button`
        width: 300px;
        height: 100px;
        font-size: 17px;
        margin: 50px;
        visibility: ${( {showBoton}) => showBoton ? 'hidden' : 'none'};

    `;

    export const Pantalla = styled.div`
        width: 98%;
        height: 800px;
        
    `;

