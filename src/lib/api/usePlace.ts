import {useState, useEffect} from 'react'
import {PlacesData, PlaceType} from "../../types";
import {api} from "./docvisionAPI";

type UsePlaceType = {
  place: PlaceType | undefined,
  loading: boolean
}

type State = {
  placesData: PlacesData | null
  loading: boolean
}
export const usePlace = (id: string): UsePlaceType => {
  const [{placesData, loading}, setPlaces] = useState<State>({loading: true, placesData: null})

  useEffect(() => {
    const getPlaces = async () => {
      const places = await api.getPlaces()
      if (places) {
        setPlaces({placesData: places, loading: false})
      }
    }
    getPlaces()
  }, [])

  const place = placesData?.places.find(place => place.id === id)
  return {
    place, loading
  }
}
