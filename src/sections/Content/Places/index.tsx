import React, {useEffect, useState} from 'react';
import {Place} from "./components/Place";
import {PlacesData, PlaceType} from "../../../types";
import {api} from '../../../lib/api/docvisionAPI'


export const Places = () => {
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

  const getPlace = (id: string): PlaceType | undefined => {
    const place: PlaceType | undefined = placesData!.places.find(place => place.id === id)
    if (place?.parts) {
      place.parts.forEach(part => getPlace(part))
    }
    return place
    // if (place) {
    //   return place
    // }
  }

  const displayLoading = (<div>Loading</div>)


  return (
    <div className={'layout__content__places'}>
      {
        loading ? displayLoading :
          placesData?.places.filter(place => place.id === 'main' || place.id === 'production')
            .map(place => <Place key={place.id} place={place} getPlace={getPlace}/>)
      }
    </div>
  );
};
