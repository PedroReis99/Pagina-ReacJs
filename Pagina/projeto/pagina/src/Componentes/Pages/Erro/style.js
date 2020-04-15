import styled from 'styled-components';
import { Error } from '@styled-icons/boxicons-solid/Error';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-left: 100px;
    width: 1100px;
    height: 500px;
`;

export const IconeErro = styled(Error)`
    width: 150px;
    height: 150px;
`;

export const Texto = styled.h1`
    font-size: 30px;
`;