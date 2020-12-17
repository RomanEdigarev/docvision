export type PlacesData = {
  places: PlaceType[]
}

export type PlaceType = {
  data: {
    name: string,
  }
  id: string,
  parts: string[]
}

