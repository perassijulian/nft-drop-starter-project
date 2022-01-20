import React from 'react';

const Navbar = () => {
  return (
      <div className='navbar'>
        <h2 className='navbar--logo'>DEADIE BEAR</h2>
        <nav className='navbar--list'>
            <h2 className='navbar--list--item'>DISCORD</h2>
            <h2 className='navbar--list--item'>TWITTER</h2>
            <h2 className='navbar--list--item'>ABOUT</h2>
        </nav>
      </div>);
};

export default Navbar;