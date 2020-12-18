import React, {FC} from 'react';
import {Link} from 'react-router-dom'

type Props = {
  to: string
  text: string
}
export const MenuItem : FC<Props> = ({to, text}) => {
  return (
    <Link className={'menu__item'} to={to}>
      {text}
    </Link>
  );
};

