import React, {FC} from 'react';
import {Link, RouteComponentProps} from 'react-router-dom'
import {usePlace, useInventory} from '../../../lib'

type MatchParams = {
  id: string
}

// usePlace и useInventory используются для демонстрации
export const ViewPlace: FC<RouteComponentProps<MatchParams>> = ({match}:any) => {
  const placeId = match.params.id
  const {place, loading} = usePlace(placeId)
  const inventorys = useInventory(placeId)

  if(loading) {
    return <div>Loading</div>
  }

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
      <Link to={`/inventory/add-new/data?placeId=${place?.id}`} className={'add-link'}>
        <span className="material-icons">add</span>
        <span className={'add-link__text'}>Добавить оборудование</span>
      </Link>
    </div>
  );
};

