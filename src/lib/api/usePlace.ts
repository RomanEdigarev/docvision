import {useState, useEffect} from 'react'
import {PlacesData, PlaceType} from "../../types";
import {api} from "./docvisionAPI";

export const usePlace = (id: string): PlaceType | undefined => {
  const [placesData, setPlaces] = useState<PlacesData>()

  useEffect(() => {
    const getPlaces = async () => {
      const places = await api.getPlaces()
      if (places) {
        setPlaces(places)
      }
    }
    getPlaces()
  }, [])

  const place = placesData?.places.find(place => place.id === id)
  return place
}
