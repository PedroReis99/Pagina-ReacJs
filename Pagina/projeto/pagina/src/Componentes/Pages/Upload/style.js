import styled, { css } from 'styled-components';
import { UploadToCloud } from '@styled-icons/entypo/UploadToCloud';


const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 50px;
    width: 500px;
`;

export const Caminho = styled.p`
    font-size: 12px;
    color: #424242;
`;

export const Funcao = styled.h1`
    font-size: 35px;
`;

export const Janela = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 90px;
    width: 1150px;
    height: 450px;
    background-color: #FFFF;
    border-radius: 19px;
`;

export const AreaUpload = styled.div.attrs({
    className: "dropzone"
})`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 30px;
    width: 500px;
    height: 350px;
    background-color: #DDDD;
    border: solid  4px;
    border-style: dashed;
    border-radius: 15px;
    cursor: pointer;

    transition: height 0.2s ease;
    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

export const IconeUpload = styled(UploadToCloud)`
    width: 150px;
    height: 150px;
    color rgb(66,66,66);
`;

export const TextoUpload = styled.p`
    font-size: 20px;
    color: #424242;
`;

export const Button = styled.button`
    width: 100px;
    height: 45px;
    margin-left: 500px;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #DF7401;
`;