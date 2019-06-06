import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  logout() {
    let userData = JSON.parse(localStorage.getItem('userData'));
    userData.loggedIn = false;
    localStorage.setItem('userData', JSON.stringify(userData));
    document.location.reload();
  }

  render() {
    return (
      <nav>
        <div className='topbar'>
          <div className='branding'>
            <a href='/'>
              <div className='glyph' />
              <div className='divider' />
              <div className='typelogo' />
            </a>
          </div>
          <div className='searchbar'>
            <div className='search-glyph' />
            <input type='text' placeholder='Search' className='search-input' />
            <div className='search-clear-glyph' />
          </div>
          <div className='navlinks'>
            <div className='glyph-container'>
              <a href='/'>
                <span className='explore-glyph' />
              </a>
            </div>
            <div className='glyph-container'>
              <a href='/'>
                <span className='heart-glyph' />
              </a>
            </div>
            <div className='glyph-container'>
              <a href='/' onClick={this.logout}>
                <span className='profile-glyph' />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
