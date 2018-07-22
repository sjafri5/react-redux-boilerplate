import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    const isHome = pathname === '/';
    const isJustAnotherPage = pathname === '/page';

    return (
        <header className="globalHeader">
          <ul>
            <li className={!isHome ? 'active' : ''}>
              { isHome ? 'Home' : <Link to="/">Home</Link> }
            </li>
            <li className={!isJustAnotherPage ? 'active' : ''}>
              { isJustAnotherPage ? 'Short Keys' : <Link to="/page">Short Keys</Link> }
            </li>
          </ul>
        </header>
    );
  }
}

export default Header;
