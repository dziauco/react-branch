import React, { Component, ReactNode } from 'react';

class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <h1 className="header_heading">yo, welcome to pokeapp!</h1>
        <p className="header_par">
          u can type pokemon's name and this app return u it's desc! or u can
          see the list of all pokemons names
        </p>
      </header>
    );
  }
}

export default Header;
