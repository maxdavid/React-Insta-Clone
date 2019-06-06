import React from 'react';
import './Login.scss';

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
      <section className="login-dialog">
        <form onSubmit={this.submitLogin}>
          <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChanges} />
          <input placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChanges} />
          <button>Submit</button>
        </form>
      </section>
    );
  }
}

export default Login;