import React, {FC} from 'react';
import {Place} from "./components/Place";
import {PlacesData, PlaceType} from "../../../types";

type Props = {
  placesData: PlacesData
}
export const Places : FC<Props>= ({placesData}) => {

  const getPlace = (id: string): PlaceType | undefined => {
    const place: PlaceType | undefined = placesData!.places.find(place => place.id === id)
    if (place?.parts) {
      place.parts.forEach(part => getPlace(part))
    }
    return place
  }

  return (
    <div className={'layout__content__places'}>
      {
          placesData?.places.filter(place => place.id === 'main' || place.id === 'production')
            .map(place => <Place key={place.id} place={place} getPlace={getPlace}/>)
      }
    </div>
  );
};
