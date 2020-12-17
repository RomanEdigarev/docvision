import React, {useEffect, useState} from 'react';
import {Place} from "./components/Place";
import {PlacesData} from "../../../types";
import {api} from '../../../api'


export const Places = () => {
  const [placesData, setPlaces] = useState<PlacesData>()
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const getPlaces = async () => {
      const places = await api.getPlaces()
      if(places) {
        setPlaces(places)
        setLoading(false)
      }
    }
    getPlaces()
  },[])

  const displayLoading = (<div>Loading</div>)

  return (
    <div className={'layout__content__places'}>
      {
         loading ? displayLoading :
           placesData?.places.map(place => <Place place={place}/>)
      }
    </div>
  );
};
