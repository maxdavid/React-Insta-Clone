import React from 'react';

const withAuthenticate = PostsPage => LoginPage => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount = () => {
        this.setState(JSON.parse(localStorage.getItem('userData')));
      }

      render() {
        if (this.state.loggedIn) {
          return <PostsPage userData={this.state} />
        } else {
          return <LoginPage />
        }
      }
    };
  };

export default withAuthenticate;