import React from 'react';

function Navigation({ navOptions }) {
  return (
    <nav className="navigation">
      <ul>
        {navOptions.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
