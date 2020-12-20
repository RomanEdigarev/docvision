import React, {FC} from 'react';
import {InventoryData, PlacesData} from "../../../../types";
import {useLocation} from "react-router-dom";
import {AddForm} from "./components/add";
import {UpdateForm} from "./components/update";

type Props = {
  placesData: PlacesData | null
  inventoryData?: InventoryData | null
}

export const InventoryForm: FC<Props> =
  ({placesData, inventoryData}) => {

    const placeId = new URLSearchParams(useLocation().search).get('placeId')
    const inventoryId = new URLSearchParams(useLocation().search).get('inventoryId')

    const currentPlace = placeId ?
      placesData?.places.find(place => place.id === placeId) : null
    const currentInventory = inventoryId ?
      inventoryData?.inventory.find(invent => invent.id === inventoryId) : null

    if (currentInventory) {
      return <UpdateForm placesData={placesData!} currentPlace={currentPlace!} currentInventory={currentInventory}/>
    }
    return <AddForm placesData={placesData} currentPlace={currentPlace}/>
  };
