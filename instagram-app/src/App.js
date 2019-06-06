import React from 'react';
import './App.scss';

import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

class App extends React.Component {
  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
    return (
      <section>
        <ComponentFromWithAuthenticate userData={this.userData} />
      </section>
    );
  }
}

export default App;
