import React from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './assets/dummy-data';

function App() {
  return (
    <section>
      <SearchBar />
      <main role='main'>
        <section className='social-feed'>
          {dummyData.map((post) => (
            <PostContainer data={post} key={post.id} />
          ))}
        </section>
      </main>
    </section>
  );
}

export default App;
