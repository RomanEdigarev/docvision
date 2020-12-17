import React from 'react';
import {Link} from 'react-router-dom'

export const MenuItem = () => {
  return (
    <Link className={'menu__item'} to={'/'}>
      Menu Item
    </Link>
  );
};

