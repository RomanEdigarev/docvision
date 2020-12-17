import React from 'react';

export const Header = () => {
  return (
    <div className={'layout__header'}>
      <div className="layout__header__search">
        <span className="material-icons">search</span>
        <input className={'layout__header__search__input'} type="text"/>
      </div>
     <div className="layout__header__profile">
       <span className="material-icons">perm_identity</span>
       <span>Profile</span>
     </div>
    </div>
  );
};
