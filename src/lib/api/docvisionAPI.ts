import {Inventory, InventoryData, PlacesData, PlaceType} from "../../types";

export const api = {
  getPlaces: async (): Promise<PlacesData> => {
    // @ts-ignore
    const placesData: PlaceType[] = await firebase.firestore().collection("places").get()
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
  },

  getInventory: async (): Promise<InventoryData> => {
    // @ts-ignore
    const inventoryData: Inventory[] = await firebase.firestore().collection("inventory").get()
      .then(response => {
        // eslint-disable-next-line array-callback-return
        let docs: Inventory[] = response.docs.map(x => {
          if (x.data().place) {
            return ({
              id: x.id,
              data: x.data(),
              placeId: x.data()?.place.id
            })
          }
        });
        return docs
      });
    return {
      inventory: inventoryData.filter(inventory => inventory)
    }
  },

  addNewInventory: async ({name, count, placeId}) => {
    // @ts-ignore
    let filestore = firebase.firestore();
    filestore.collection("inventory").doc().set({
      name,
      count,
      place: filestore.collection("places").doc(`${placeId}`)
    }).then(() => {

      console.info("Done");
    });
  }

}
