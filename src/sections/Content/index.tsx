import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import {Places} from "./Places";
import {ViewPlace} from "./ViewPlace";
import {Inventorys} from "./Inventorys";
import {InventoryForm} from "./Forms/InventoryForm";
import {InventoryData, PlacesData} from "../../types";
import {api} from "../../lib";


type State = {
  placesData : PlacesData | null,
  inventoryData : InventoryData | null
  loading: boolean
}
const Content = () => {
  const [{placesData, inventoryData, loading}, setState] = useState<State>({placesData: null, inventoryData: null, loading: true})

  useEffect(() => {
    const getState = async () => {
      const places = await api.getPlaces()
      const inventory = await api.getInventory()
      if (places && inventory) {
       setState({placesData: places, inventoryData: inventory, loading: false})
      }
    }
    getState()
  }, [])

  if(loading) {
    return <div>Loading</div>
  }

  return (
    <div className={'layout__content'}>
      <Route exact path={'/places'}><Places placesData={placesData!}/></Route>
      <Route exact path={'/place/:id'} render={props => <ViewPlace {...props}/>}/>
      <Route exact path={'/inventory'}><Inventorys placesData={placesData} inventoryData={inventoryData}/></Route>
      <Route exact path={'/inventory/add-new/:placeId/'} render={props => <InventoryForm {...props} placesData={placesData}/>}/>
      <Route path={'/inventory/add-new/:placeId/:inventoryId'}
             render={props => <InventoryForm {...props} placesData={placesData} inventoryData={inventoryData}/>}/>
    </div>
  );
};

export default Content;

