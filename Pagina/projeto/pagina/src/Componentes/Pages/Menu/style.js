import styled from 'styled-components';
import { ShoppingBag } from '@styled-icons/remix-line/ShoppingBag';



export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 50px;
    width: 400px;
`;

export const Caminho = styled.p`
    font-size: 12px;
    color: #424242;
`;

export const Funcao = styled.h1`
    font-size: 35px;
`;

export const Botao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 200px;
    margin-top: 10px;
    margin-left: 100px;
    background-color: #FFF;
    border-radius: 15px;
    text-decoration: none;
`;

export const Sacola = styled(ShoppingBag)`
    width: 70px;
    height: 70px;
`;

export const Nome = styled.h1`
    font-size: 30px;
    text-decoration: none;
`;