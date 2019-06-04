import React from 'react';
import './CommentSection.scss'

import PropTypes from 'prop-types';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.data
    }
  }

  render() {
    const {username, text} = this.state.comment;
    return (
      <li className='comment'>
        <h2 className='username'>
          <a href='/'>{username}</a>
        </h2>
        <span>{text}</span>
      </li>
    )
  }
}

Comment.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
