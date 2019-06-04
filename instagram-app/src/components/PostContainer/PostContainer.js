import React from 'react';
import './PostContainer.scss';

import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: props.postData,
      userData: props.userData
    }
  }

  render() {
    const {username, thumbnailUrl, imageUrl, comments, timestamp} = this.state.postData;
    return (
      <article className='post-container'>
        <header>
          <div className='poster-avatar'>
            <a href='/'>
              <img src={thumbnailUrl} alt="{username}'s profile picture" />
            </a>
          </div>
          <div className='poster-handle'>
            <h2>
              <a href='/' title={username}>
                {username}
              </a>
            </h2>
          </div>
        </header>
        <div className='post-image'>
          <img src={imageUrl} alt="{username}'s image post" />
        </div>
        
        <div className='interaction-buttons'>
          <button>
            <span className='heart-glyph' />
          </button>
          <button>
            <span className='comment-glyph' />
          </button>
          <button>
            <span className='share-glyph' />
          </button>
          <button className='right-align'>
            <span className='bookmark-glyph' />
          </button>
        </div>

      <CommentSection userData={this.state.userData} comments={comments} timestamp={timestamp} />

      </article>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer;
