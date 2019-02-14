import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => (
  <div>
    <header className="header-bar">
      <div className="header-bar_div">
        <Link to='/Contact/'>Contact</Link>
        <Link to='/ProjectsContainer/'>Projects</Link>
      </div>
    </header>
    { children }
  </div>
)

export default Layout;