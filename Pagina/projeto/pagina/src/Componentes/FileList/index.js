import React from 'react';
import { Container, Item, IconeArquivo, Fechar} from './style';


const FileList = () => (
    <Container>
        <Item>
            <Fechar />
            <center>
                <div>
                    <IconeArquivo />
                </div>
            </center>
        </Item>
    </Container>
);

export default FileList;