import React from 'react';

function Header() {
  return (
    <React.Fragment>
      <div className="nav pr-4 pl-4 pt-3">
        <h1 className="headingFont text-white">Happy Fizzles <span style={{fontSize: 12, color: "#BCB6FF"}} >Kombucha Company Ltd.</span></h1>
        <h2 style={{fontSize: 16}} className="bodyFont ml-auto pt-4 text-white"><em>Happy gut, happy . . . everything!</em></h2>
      </div>
    </React.Fragment>
  );
}

export default Header;