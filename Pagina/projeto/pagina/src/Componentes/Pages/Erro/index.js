import React, { Component } from 'react';
import { Container, IconeErro, Texto } from './style';

class Erro extends Component{
    render(){
        return(
            <Container>
                <IconeErro />
                <Texto>Erro 404</Texto>
                <Texto>Page not found</Texto>
            </Container>
        );
    }
}

export default Erro;