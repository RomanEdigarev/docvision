import React, {FC} from 'react';
import {Inventory, PlaceType} from "../../../../../types";
import {Link} from "react-router-dom";

type Props = {
  inventory: Inventory
  place: PlaceType
}

export const InventoryItem: FC<Props> = ({inventory, place}) => {

  return (
    <>
      <h1>{inventory.data.name}</h1>
      <div className={'layout__content__inventorys__items__item__description'}>
        <div><Link to={`/place/${place.id}`}>Место нахождения: {place.data.name}</Link></div>
        <span>Количество: {inventory.data.count}</span>
      </div>
      <button>Редактировать</button>
    </>
  );
};


