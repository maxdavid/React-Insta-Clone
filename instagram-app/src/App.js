import React from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './assets/dummy-data';

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
        <SearchBar />
        <main role='main'>
          <section className='social-feed'>
            {dummyData.map((post) => (
              <PostContainer postData={post} userData={this.state.userData} key={post.id} />
            ))}
          </section>
        </main>
      </section>
    );
  }
}

export default App;
