import React from 'react';
import './App.scss';

import PostsPage from './components/PostContainer/PostsPage';

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
    return (
      <section>
        <PostsPage userData={this.userData} />
      </section>
    );
  }
}

export default App;
