import React from 'react';

const Header = () => {
  const handleClick = (label) => {
    console.log(`${label} clicked`);
  };

  return (
    <div className='m-5'>
      <button onClick={() => handleClick("About Us 1")}>
        About Us 1
      </button>
      <button onClick={() => handleClick("About Us 2")}>
        About Us 2
      </button>
      <button onClick={() => handleClick("About Us 3")}>
        About Us 3
      </button>
    </div>
  );
};

export default Header;
