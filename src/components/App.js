import React from 'react';
import Links from "../containers/Links";
import FacebookLogin from 'react-facebook-login';
import { strict } from 'assert';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { resolve } from 'dns';

const WrapButtonLogout = styled(Button)`
    font-family: Helvetica,sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: calc(.27548vw + 12.71074px);
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color .3s,border-color .3s;
    background-color: #4c69ba;
    border: calc(.06887vw + .67769px) solid #4c69ba;
    padding: calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px);

`

export default class App extends React.Component {
    
    state = {isAuth: false}

    responseFacebook = (response) => {
        if(response && response.accessToken) {
            sessionStorage.setItem('userAuth', JSON.stringify(response));
            this.setState({isAuth: true});
        }
        
        console.log(response);
    }

    logoutUser = () => {
        this.setState({isAuth: false});
        sessionStorage.clear('userAuth');
    }

    render(){
        let userInfo = sessionStorage.getItem('userAuth');
        console.log('userInfo:', userInfo);
        let isLogged = this.state.isAuth;
        if (!isLogged && userInfo){
            userInfo = JSON.parse(userInfo);
            isLogged = userInfo && userInfo.accessToken !== '';
        }
        return(
            
            <div>
                {!isLogged ?
                    <FacebookLogin
                    appId="822488144791036"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    />
                    :
                    <div>
                        <WrapButtonLogout bsStyle="primary" size="lg" onClick={this.logoutUser}>Logout as {userInfo.name}</WrapButtonLogout>
                    </div>
                }

                <br />

                <Links isUserLogged={isLogged}/>
            </div>
        )
    }
}