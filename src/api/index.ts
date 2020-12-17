import {PlacesData, PlaceType} from "../types";

export const api = {
  getPlaces: async (): Promise<PlacesData> => {
    // @ts-ignore
    const placesData : PlaceType[]= await firebase.firestore().collection("places").get()
      .then(response => {
        let docs: PlacesData = response.docs.map(x => ({
          id: x.id,
          data: x.data(),
          parts: x.data().parts && x.data().parts.map(part => part.id)
        }));
        return docs
      });
    return {
      places: placesData
    }
  }
}
