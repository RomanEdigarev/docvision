import React, {FC} from 'react';
import {Inventory, PlaceType} from "../../../../../types";
import {Link} from "react-router-dom";

type Props = {
  inventory: Inventory
  place: PlaceType
  deleteInventory: (inventoryId: string) => Promise<void>
}

export const InventoryItem: FC<Props> = ({inventory, place, deleteInventory}) => {

  return (
    <>
      <h1>{inventory.data.name}</h1>
      <div className={'layout__content__inventorys__items__item__description'}>
        <div><Link to={`/place/${place.id}`}>Место нахождения: {place.data.name}</Link></div>
        <span>Количество: {inventory.data.count}</span>
      </div>
      <Link to={`/inventory/add-new/data?placeId=${place.id}&inventoryId=${inventory.id}`}><button>Редактировать</button></Link>
      <button onClick={() => deleteInventory(inventory.id)}>Удалить</button>
    </>
  );
};


