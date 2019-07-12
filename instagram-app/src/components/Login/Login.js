import React from 'react';
import './Login.scss';

import styled from 'styled-components'
import spriteCore from '../../assets/sprite-core.png';

const LoginDialog = styled.div`
  width: 350px;
  margin: 60px auto;
  background-color: white;
  border-radius: 3px;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
`;

const WordMark = styled.div`
  margin: 25px auto;
  width: 175px;
  height: 51px;
  background-image: url(${spriteCore});
  background-size: 410px 396px;
  background-position-x: 0px;
  background-position-y: -97px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  margin: 10px;
  padding: 5px 15px;
  border-radius: 3px;
  border: 1px solid rgb(221, 221, 221);
`;

const LoginSubmit = styled.button`
  padding: 5px 15px;
  margin: 20px 0;
  color: white;
  font-weight: 600;
  background-color: rgb(56, 151, 240);
  border-radius: 3px;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    }
    this.state = JSON.parse(localStorage.getItem('userData'));
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitLogin = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.setState({loggedIn: true});
      localStorage.setItem('userData', JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        loggedIn: true
      }));
    }
    document.location.reload();
  }

  render() {
    return (
      <LoginDialog>
        <WordMark />
        <LoginForm onSubmit={this.submitLogin}>
          <LoginInput placeholder='Username' name='username' value={this.state.username} onChange={this.handleChanges} />
          <LoginInput placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChanges} />
          <LoginSubmit>Submit</LoginSubmit>
        </LoginForm>
      </LoginDialog>
    );
  }
}

export default Login;