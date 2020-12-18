import React from 'react';
import {Places} from "./Places";

const Content = () => {
  return (
    <div className={'layout__content'}>
      <Places />
      {/*<Route exact path={'/place/:id'} render={(props) => <ViewPlace {...props}/>}/>*/}
    </div>
  );
};

export default Content;
