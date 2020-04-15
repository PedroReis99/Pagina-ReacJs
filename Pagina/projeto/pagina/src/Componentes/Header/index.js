import React, { Component } from 'react';
import { Container, Lista, Cloud } from './style';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <Container>
                <Link to="/" >
                    <Lista />
                </Link>
                <Link to="/Menu" >
                    <Cloud />
                </Link>
            </Container>
        );
    }
}

export default Header;