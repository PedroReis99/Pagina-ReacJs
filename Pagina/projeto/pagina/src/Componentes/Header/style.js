import styled from 'styled-components';
import { ListAlt } from '@styled-icons/fa-regular/ListAlt';
import { UploadToCloud} from '@styled-icons/entypo/UploadToCloud';//CloudUpload não funciona



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 657px;
    background-color: #4C0B5F;

`;

export const Lista = styled(ListAlt)`
    width: 30px;
    height: 60x;  
    color rgb(255,255,255);
`;

export const Cloud = styled(UploadToCloud)`
    width: 30px;
    height:60px;
    color rgb(255,255,255);
`;