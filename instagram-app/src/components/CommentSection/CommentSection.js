import React from 'react';
import './CommentSection.scss';

import * as moment from 'moment';
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: props.userData,
      comments: props.comments,
      timestamp: props.timestamp,
      newComment: ''
    }
  }

  render() {
    const {comments, timestamp} = this.state;
    return (
      <div className='comment-section'>
        <ul>
          {comments.map((comment) => (
            <Comment data={comment} key={comment.id} />
          ))}
        </ul>

        <div className='timestamp'>
          <time>{moment(timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</time>
        </div>

        <div className='post-comment'>
          <form onSubmit={this.addNewComment}>
            <input type='text' placeholder='Comment...' value={this.state.newComment} onChange={this.handleNewCommentChange} />
            <button className={this.state.newComment ? 'button-active' : 'button-inactive'}>Post</button>
          </form>
        </div>
      </div>
    )
  }

  handleNewCommentChange = (event) => {
    this.setState({
      newComment: event.target.value
    });
  }

  addNewComment = (event) => {
    event.preventDefault();
    if (this.state.newComment) {
      this.setState({
        comments: [...this.state.comments, {
          id: Date.now(),
          username: this.state.userData.username,
          text: this.state.newComment
        }],
        newComment: ''
      });
    }
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string
}

export default CommentSection;
