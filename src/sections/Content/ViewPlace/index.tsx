import React, {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import {usePlace, useInventory} from '../../../lib'

type MatchParams = {
  id: string
}
export const ViewPlace: FC<RouteComponentProps<MatchParams>> = ({match}:any) => {
  const placeId = match.params.id
  const place = usePlace(placeId)
  const inventorys = useInventory(placeId)
  console.log(inventorys)
  return (
    <div className={'layout__content__view-place'}>
      <h1>
        {place?.data.name}
      </h1>
      <ul>
        {
          inventorys?.map(inventory => <li key={inventory.id}>{inventory.data.name}</li>)
        }
      </ul>
    </div>
  );
};

