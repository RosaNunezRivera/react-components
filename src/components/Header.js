
import React from 'react';
import Navigation from './Navigation';
import Button from './Button';

function Header(props) {
  const { isLoggedIn, title, navOptions } = props;
  
  return (
    <header>
      <div className="container flexbox">
        <div>
          <h1 className="logo">{title}</h1>
        </div>
        <Navigation navOptions={navOptions} />
        <Button isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
  }

  export default Header;



