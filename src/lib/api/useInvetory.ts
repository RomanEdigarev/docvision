import {useEffect, useState} from 'react'
import {Inventory, InventoryData, PlacesData} from "../../types";
import {api} from "./docvisionAPI";

export const useInventory = (placeId: string) : Inventory[] | undefined => {
  const [inventoryData, setInventory] = useState<InventoryData>()


  useEffect(() => {
    const getInventory = async () => {
      const {inventory} = await api.getInventory()
      setInventory({inventory})
    }
    getInventory()

  }, [])

  const inventorysInPlace = inventoryData?.inventory.filter(inventory => inventory.placeId === placeId)
  return inventorysInPlace
}
