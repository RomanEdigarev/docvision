import React, {FC} from 'react';
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
        <li><h2>{place.parts[0]}</h2></li>
        <li><h2>{place.parts[1]}</h2></li>
      </ul>
    </div>
  ) :  (
    <div className={'layout__content__place'}>
      <div className={'layout__content__place__main'}>
        <h1>{place.data.name}</h1>
      </div>
    </div>
  )


  return (
    <>
      {renderPlace}
    </>
  );
};
