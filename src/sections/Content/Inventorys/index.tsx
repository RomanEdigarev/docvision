import React, {FC, useEffect, useState} from 'react';
import {InventoryData, PlacesData} from "../../../types";
import {api} from '../../../lib'
import {InventoryItem} from "./components/Inventory";

type State = {
  inventoryData: InventoryData | null
}
type Props = {
  placesData: PlacesData | null
}
export const Inventorys: FC<Props> = ({placesData}) => {
  const [{inventoryData}, setInventorys] = useState<State>({inventoryData: null})

  useEffect(() => {

    const getInvetorys = async () => {
      const inventoryData = await api.getInventory()

      if (inventoryData) {
        setInventorys({inventoryData})
      }
    }
    getInvetorys()
  }, [])

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
