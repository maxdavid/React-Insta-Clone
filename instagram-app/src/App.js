import React from 'react';
import './App.scss';

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {
        username: 'exampleuser'
      }
    }
  }

  render() {
    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);
    return (
      <section>
        <ComponentFromWithAuthenticate userData={this.userData} />
      </section>
    );
  }
}

export default App;
