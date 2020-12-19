import React, {useEffect, useState} from 'react';
import {InventoryData, PlacesData} from "../../../types";
import {api} from '../../../lib'
import {InventoryItem} from "./components/Inventory";

type State = {
  inventoryData: InventoryData | null
  placesData: PlacesData | null
  loading: boolean
}
export const Inventorys = () => {
  const [{inventoryData, placesData, loading}, setInventorys] = useState<State>({placesData: null, inventoryData: null, loading: true})

  useEffect(() => {

    const getState = async () => {
      const inventoryData = await api.getInventory()
      const placesData = await api.getPlaces()
      if (inventoryData) {
        setInventorys({inventoryData, placesData, loading: false})
      }
    }
    getState()
  }, [])

  if(loading) {
    return <div>Loading</div>
  }
  return (
    <div className={'layout__content__inventorys'}>
      <ul className={'layout__content__inventorys__items'}>
        {
          inventoryData?.inventory.map((invent) => {
              const place = placesData?.places.find(place => place.id === invent.placeId)
              return <li key={invent.id} className={'layout__content__inventorys__items__item'}>
                <InventoryItem inventory={invent} place={place!}/>
              </li>
            }
          )
        }


      </ul>
    </div>
  );
};
