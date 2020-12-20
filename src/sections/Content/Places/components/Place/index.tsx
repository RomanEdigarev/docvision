import React, {FC} from 'react';
import {Link} from 'react-router-dom'
import {PlaceType} from "../../../../../types";


type Props = {
  place: PlaceType
  getPlace: (id: string) => PlaceType | undefined
}
export const Place: FC<Props> = ({place, getPlace}) => {


  return (
    <>
      {place.parts?.length > 0 ? (
        <div className={'layout__content__place'}>
          <div className={'layout__content__place__main'}>
            {place.data.name}
          </div>
          <ul className={'layout__content__place__parts'}>
            {
              place.parts.map(part => <li key={part}>
                {
                  getPlace(part)?.parts ? <Place place={getPlace(part)!} getPlace={getPlace}/> :
                   <Link to={`/place/${part}`}>{ getPlace(part)?.data.name}</Link>
                }</li>)
            }
          </ul>
        </div>
      ) : null}
    </>
  );
};
