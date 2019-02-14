import React from 'react';
import { Link } from 'gatsby';

const Header = (props) => (
  <header className="header-bar">
    <div className="header-bar_div">
      <Link to='/Contact/'>Contact</Link>
      <Link to='/ProjectsContainer/'>Projects</Link>
    </div>
  </header>
)

export default Header;