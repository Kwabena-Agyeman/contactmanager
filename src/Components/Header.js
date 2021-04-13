import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand navbar-dark bg-success mb-3'>
        <div className='container'>
          <a className='navbar-brand' href='/#'>
            <h2>Contact Manager</h2>
          </a>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <h5>Contacts</h5>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/addContact'>
                <h5>Add Contact</h5>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                <h5>About</h5>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
