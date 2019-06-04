import React from 'react';
import './CommentSection.scss';

import * as moment from 'moment';

import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp
    }
  }

  render() {
    const {comments, timestamp} = this.state;
    return (
      <div className='comment-section'>
        <ul>
          {comments.map((comment) => (
            <Comment data={comment} />
          ))}
        </ul>

        <div className='timestamp'>
          <time>{moment(timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</time>
        </div>

        <div className='post-comment'>
          <form>
            <input type='text' placeholder='Comment...' />
            <button>Post</button>
          </form>
        </div>
      </div>
    )

  }
}

export default CommentSection;
