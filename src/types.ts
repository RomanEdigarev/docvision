export type PlacesData = {
  places: PlaceType[]
}

export type PlaceType = {
  data: {
    name: string,
    parts: string[]
  }
  id: string,
  parts: string[]
}

export type Inventory = {
  data : {
    count: string
    name: string
    place: PlaceType
  }
  id: string
  placeId: string
}

export type InventoryData = {
  inventory: Inventory[]
}

