import styled from 'styled-components';

import {MagnifyingGlass} from '@styled-icons/open-iconic/MagnifyingGlass';
import {DeleteForever} from '@styled-icons/material/DeleteForever';

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

export const DivTabela = styled.div`
    margin-top: 50px;
    margin-left: 60px;
    width: 1100px;
    height: 400px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

export const Tabela = styled.table`
    margin-top: 20px;
    margin-left: 40px;
    background-color: #4C0B5F;
    width: 95%;
    height: 280px;
    border: solid #4C0B5F 2px;
    border-radius: 14px;
    padding: 0px;
    font-size: 30;
    color: black;
`;

export const Categoria = styled.th`
    margin-top: 10px;
    height: 40px;
    background-color: #4C0B5F;
    border-radius: 5px;
    -moz-border-radius: 5px;
    padding: 0px;
    font-size: 20px;
    color: #fff;
`;

export const Conteudo = styled.tr`
    height: 45px;
    background-color: #FFFF;
`;

export const Rodape = styled.tfoot`
    background-color: #4C0B5F;
    aling-items: center;
    justify-content: center;
    font-size: 15px;
    color: #FFF;
`;

export const Texto = styled.input`
    width: 210px;
    height: 30px;
    margin-top: 10px;
    margin-left: 30px;
    border-radius: 18px;
`;

export const Lixeira = styled(DeleteForever)`
    width: 25px;
    height: 25px;
    color rgb(255,0,0);
`;

export const Lupa = styled(MagnifyingGlass)`
    width: 25px;
    height: 25px;
    color rgb(76,11,95);
    margin-top: -2px;
    margin-left: -45px
`;