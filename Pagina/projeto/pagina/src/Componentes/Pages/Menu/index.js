import React, { Component } from 'react';
import { Titulo, Caminho, Funcao, Botao, Sacola, Nome } from './style';
import { Link } from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
            <div>
                <Titulo>
                    <Caminho>Home > Importação de Dados</Caminho>
                    <Funcao>Importação de Dados</Funcao>
                </Titulo>
                <Botao>
                    <Link to="/Menu/Upload">
                        <Sacola />
                    </Link>
                    <Nome>Produtos</Nome>
                </Botao>
            </div>
        );
    }
}

export default Menu;