import React from 'react';
import './PostContainer.scss';

import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <article className='post-container'>
        <header>
          <div className='poster-avatar'>
            <a href='/'>
              <img src={this.state.thumbnailUrl} alt="{this.state.username}'s profile picture" />
            </a>
          </div>
          <div className='poster-handle'>
            <h2>
              <a href='/' title={this.state.username}>
                {this.state.username}
              </a>
            </h2>
          </div>
        </header>
        <div className='post-image'>
          <img src={this.state.imageUrl} alt="{this.state.username}'s image post" />
        </div>
        
        <div className='interaction-buttons'>
          <button>
            <span className='heart-glyph' />
          </button>
        </div>

      <CommentSection comments={this.state.comments} timestamp={this.state.timestamp} />

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
