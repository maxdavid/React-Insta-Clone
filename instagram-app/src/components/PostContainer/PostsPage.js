import React from 'react';
import './PostContainer.scss';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import dummyData from '../../assets/dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.userData
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

export default PostsPage;
