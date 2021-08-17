import React from 'react';
import logo from './images/avatar.jpg'

function ColoredUserpic(props) {
  return (
    <div className="colored">
      <img className="colored__img" src={logo} alt="logo"/>
    </div>
  );
}

export default ColoredUserpic;