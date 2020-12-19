import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import {Places} from "./Places";
import {ViewPlace} from "./ViewPlace";
import {Inventorys} from "./Inventorys";
import {InventoryForm} from "./Forms/InventoryForm";
import {PlacesData} from "../../types";
import {api} from "../../lib";

const Content = () => {

  const [placesData, setPlaces] = useState<PlacesData>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPlaces = async () => {
      const places = await api.getPlaces()
      if (places) {
        setPlaces(places)
        setLoading(false)
      }
    }
    getPlaces()
  }, [])

  if(loading) {
    return <div>Loading</div>
  }

  return (
    <div className={'layout__content'}>
      <Route exact path={'/places'}><Places placesData={placesData!}/></Route>
      <Route exact path={'/place/:id'} render={props => <ViewPlace {...props}/>}/>
      <Route exact path={'/inventory'}><Inventorys placesData={placesData!} /></Route>
      <Route path={'/inventory/add-new/:placeId'} render={props => <InventoryForm {...props} placesData={placesData!}/>}/>
    </div>
  );
};

export default Content;

