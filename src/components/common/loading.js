import React, {Component} from 'react';
import logo from '../../logo.svg';
import './loading.css';
import styled from 'styled-components';

const ModalWrap = styled.div `
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
`

const WrapApp = styled.div `
    text-align: center;
    background: silver;
    opacity: 0.5;
    width: 100%;
    min-height: 100%;
`

class Loading extends Component {
    render(){
        return(
            <ModalWrap>
                <WrapApp>
                    <img src={logo} className='App-logo' alt="logo" />
                </WrapApp>
            </ModalWrap>
        )
    }
}

export default Loading;