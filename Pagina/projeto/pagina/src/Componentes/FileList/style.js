import styled from 'styled-components';
import { FileAlt } from '@styled-icons/fa-regular/FileAlt';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const Item = styled.div`
    width: 70px;
    height: 75px;
    margin-left: 10px;
    margin-top: 10px;
    border: solid 2px;
    border-radius: 5px;
`;

export const Container = styled.div`
    margin-top: 50px;
    margin-left: 30px;   
    width: 550px;
    height: 354px;
`;

export const IconeArquivo = styled(FileAlt)`
    width: 35px;
    height: 45px;
`;

export const Fechar = styled(Close)`
    width: 15px;
    height: 15px;
    margin-left: 50px;
    color rgb(255,0,0);
`;
