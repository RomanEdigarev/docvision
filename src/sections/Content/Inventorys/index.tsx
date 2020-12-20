import React, {FC} from 'react';
import {InventoryData, PlacesData} from "../../../types";
import {InventoryItem} from "./components/Inventory";
import {Link} from "react-router-dom";

type Props = {
  placesData: PlacesData | null
  inventoryData: InventoryData | null
  deleteInventory: (inventoryId: string) => Promise<void>
}
export const Inventorys: FC<Props> = ({placesData, inventoryData, deleteInventory}) => {

  return (
    <div className={'layout__content__inventorys'}>
      <ul className={'layout__content__inventorys__items'}>
        {
          inventoryData?.inventory.map((invent) => {
              const place = placesData?.places.find(place => place.id === invent.placeId)
              return <li key={invent.id} className={'layout__content__inventorys__items__item'}>
                <InventoryItem inventory={invent} place={place!} deleteInventory={deleteInventory}/>
              </li>
            }
          )
        }
      </ul>
      <Link to={`/inventory/add-new/`} className={'add-link'}>
        <span className="material-icons">add</span>
        <span className={'add-link__text'}>Добавить оборудование</span>
      </Link>
    </div>
  );
};
