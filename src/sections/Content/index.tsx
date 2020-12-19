import React from 'react';
import {Route} from 'react-router-dom'
import {Places} from "./Places";
import {ViewPlace} from "./ViewPlace";
import {Inventorys} from "./Inventorys";

const Content = () => {
  return (
    <div className={'layout__content'}>
      <Route exact path={'/places'}><Places /></Route>
      <Route exact path={'/place/:id'} render={props => <ViewPlace {...props}/>}/>
      <Route exact path={'/inventory'}><Inventorys /></Route>
    </div>
  );
};

export default Content;
