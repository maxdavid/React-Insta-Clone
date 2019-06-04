import React from 'react';
import './CommentSection.scss';

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
          <a>{username}</a>
        </h2>
        <span>{text}</span>
      </li>
    )
  }
}

export default Comment;
