import React, { Component } from 'react';
import { Titulo, Caminho, Funcao, DivTabela, Texto, Tabela, Categoria, Conteudo, Rodape } from './style.js';
import { Lupa, Lixeira } from './style';
import api from '../../../Componentes/Services/api.js';

class Lista extends Component{

    state = {
        produtos: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/Products');
        
        console.log(response.data);

        this.setState({ produtos: response.data });
    };

    render(){
        return(
            <div>
                <Titulo>
                    <Caminho>Home > Importação de dados</Caminho>
                    <Funcao>Listagem de Produtos</Funcao>
                    <DivTabela>
                        <Texto placeholder="Busque por palavras-chaves" /> <Lupa />
                        <Tabela>
                            <thead>
                                <Categoria>Código</Categoria>
                                <Categoria>Nome</Categoria>
                                <Categoria>Valor</Categoria>
                            </thead>
                            {this.state.produtos.map(produto => (
                                <tbody key={produto.id}>
                                    <Conteudo>
                                        <td>{produto.id}</td>
                                        <td>{produto.nome}</td>
                                        <td>
                                            {Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'
                                                    }).format(produto.valor)}
                                        </td>
                                        <center>
                                            <Lixeira />
                                        </center>
                                    </Conteudo>
                                </tbody>
                            ))}
                            <Rodape>
                                <tr>
                                    <th colSpan="4">
                                        <center>
                                            <b>
                                                Paginas: 1 de 4
                                            </b>
                                        </center>
                                    </th>
                                </tr>
                            </Rodape>
                        </Tabela>
                    </DivTabela>
                </Titulo>
            </div>
        );
    }
}

export default Lista;