import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import {PlaceType} from "../../../../../types";


type Props = {
  place: PlaceType
}
export const Place : FC<Props>= ({place}) => {

  const renderPlace = place.parts?.length > 0 ? (
    <div className={'layout__content__place'}>
      <div className={'layout__content__place__main'}>
        <h1>{place.data.name}</h1>
      </div>
      <ul className={'layout__content__place__parts'}>
        {
          place.parts.map(part => <li><Link to={`/place/${part}`}>{part}</Link></li>)
        }
      </ul>
    </div>
  ) :  (
    <div className={'layout__content__place'}>
      <div className={'layout__content__place__main'}>
        <Link to={`/place/${place.id}`}>{place.data.name}</Link>
      </div>
    </div>
  )


  return (
    <>
      {renderPlace}
    </>
  );
};
