import React from 'react';
import {MenuItem} from "./components/MenuItem";
import MenuLogo from "./components/MenuLogo";

export const Menu = () => {
  return (
    <div className={'menu'}>
      <MenuLogo/>
      <MenuItem text={'Помещения'} to={'/places'}/>
      <MenuItem text={'Оборудование'} to={'/inventory'}/>
    </div>
  );
};

