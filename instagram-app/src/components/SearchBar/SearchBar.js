import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
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
              <a href='/'>
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
