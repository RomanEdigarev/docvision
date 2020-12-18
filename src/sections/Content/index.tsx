import React from 'react';
import {Route} from 'react-router-dom'
import {Places} from "./Places";
import {ViewPlace} from "./ViewPlace";

const Content = () => {
  return (
    <div className={'layout__content'}>
      <Route exact path={'/places'}><Places /></Route>
      <Route exact path={'/place/:id'} render={props => <ViewPlace {...props}/>}/>
    </div>
  );
};

export default Content;
