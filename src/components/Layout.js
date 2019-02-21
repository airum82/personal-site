import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children, location }) => (
  <div>
    <header className="header-bar">
      <div className="header-bar_div">
        <Link to="/" className={location.pathname === "/" ? "header-selected" : ""}>Home</Link>
        <Link to='/Contact/' className={location.pathname === "/Contact/" ? "header-selected" : ""}>Contact</Link>
        <Link to='/ProjectsContainer/' className={location.pathname === "/ProjectsContainer/" ? "header-selected" : ""}>Projects</Link>
      </div>
    </header>
    { children }
  </div>
)

export default Layout;