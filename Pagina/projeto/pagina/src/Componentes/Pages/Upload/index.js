import React, { Component } from  'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import {uniqueId} from 'lodash';
import filesize from 'filesize';
import { Titulo, Caminho, Funcao, Janela, AreaUpload, IconeUpload, TextoUpload} from './style';
import FileList from '../../FileList';
import Api from '../../Services/apiUpload';

class Upload extends Component{
    
  state = {
    uploadedFiles: [],
  }

  heandleUpload = files => {
    const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: filesize(file.size),
    }))
    this.setState({
        uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });
    uploadedFiles.forEach(this.processUpload);
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    Api.post('/posts', data);
  }

    render(){
        return(
            <div>
                <Titulo>
                    <Caminho>Home > Importação de Dados > Importação de Produtos</Caminho>
                    <Funcao>Importação de Produtos</Funcao>
                </Titulo>
                <Janela>
                    <Dropzone accept="image/*" onDropAccepted={this.heandleUpload}>
                        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                            <AreaUpload 
                                {...getRootProps()}
                                    isDragActive={isDragActive}
                                    isDragReject={isDragReject} 
                                    >
                                        <IconeUpload />
                                        <TextoUpload>Arraste um arquivo ou <Link>clique aqui</Link></TextoUpload>
                                        <TextoUpload>para enviar um arquivo.</TextoUpload>
                                        <input {...getInputProps()}/>
                                    </AreaUpload>
                        )}
                    </Dropzone>
                    { !!this.heandleUpload.length && (
                        <FileList />
                    )}
                </Janela>
            </div>
        );
    }
}

export default Upload;  