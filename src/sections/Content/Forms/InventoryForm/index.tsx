import React, {FC} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {InventoryData, PlacesData} from "../../../../types";
import {api} from '../../../../lib'
import {RouteComponentProps} from "react-router-dom";
import {AddForm} from "./components/add";
import {UpdateForm} from "./components/update";

type Inputs = {
  name: string,
  count: string,
  placeId: string
};

type FormValues = {
  count: string,
  name: string,
  placeId: string
}

type Props = {
  placesData: PlacesData | null
  inventoryData?: InventoryData | null
}

type MatchParams = {
  placeId?: string
  inventoryId?: string
}

export const InventoryForm: FC<RouteComponentProps<MatchParams> & Props> =
  ({placesData, match, inventoryData}) => {

    const currentPlace = match.params.placeId ?
      placesData?.places.find(place => place.id === match.params.placeId) : null
    const currentInventory = match.params.inventoryId ?
      inventoryData?.inventory.find(invent => invent.id === match.params.inventoryId) : null

    if (currentInventory) {
      return <UpdateForm placesData={placesData!} currentPlace={currentPlace!} currentInventory={currentInventory}/>
    }
    return <AddForm placesData={placesData} currentPlace={currentPlace}/>
  };
