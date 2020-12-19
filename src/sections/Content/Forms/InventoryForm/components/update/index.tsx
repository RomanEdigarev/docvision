import React, {FC} from 'react';
import {Inventory, PlacesData, PlaceType} from "../../../../../../types";
import {SubmitHandler, useForm} from "react-hook-form";
import {api} from "../../../../../../lib";

type Inputs = {
  name: string,
  count: string,
  placeId: string
};

type FormValues = {
  count: string,
  name: string,
}

type Props = {
  placesData: PlacesData
  currentPlace: PlaceType
  currentInventory: Inventory
}
export const UpdateForm: FC<Props> = ({currentPlace, currentInventory, placesData}) => {
  const {register, handleSubmit, errors} = useForm<Inputs>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await api.updateInventory(currentInventory.id, data.count)
    // window.location.href = '/inventory'
  }

  return (
    <form className={'layout__content__form'} onSubmit={handleSubmit(onSubmit)}>

      <div className={'layout__content__form__field'}>
        <span className={'layout__content__form__field__title'}> Наименование оборудования </span>
        <input className={'layout__content__form__field__input'} name="name"
               defaultValue={currentInventory.data.name}
               ref={register({required: true, maxLength: 50})}/>
        {errors.name?.type === 'required' ?
          <span className={'layout__content__form__field__error'}>Обязательное поле</span> : null}
        {errors.name?.type === 'maxLength' ?
          <span className={'layout__content__form__field__error'}>Слишком много символов</span> : null}
      </div>

      <div className={'layout__content__form__field'}>
        <span className={'layout__content__form__field__title'}> Количество единиц оборудования </span>
        <input className={'layout__content__form__field__input'} name="count"
               defaultValue={currentInventory.data.count}
               ref={register({
                 required: true,
                 pattern: /\d/,
                 validate: value => parseInt(value) > 0 && parseInt(value) <= 100
               })}/>

        {errors.count?.type === 'required' ?
          <span className={'layout__content__form__field__error'}>Обязательное поле</span> : null}
        {errors.count?.type === 'pattern' ?
          <span className={'layout__content__form__field__error'}>Должны быть только цифры</span> : null}
        {errors.count?.type === 'validate' ?
          <span className={'layout__content__form__field__error'}>Слишком большое количество</span> : null}
      </div>

      <div className={'layout__content__form__field'}>
        <span className={'layout__content__form__field__title'}> Местонахождение </span>
        <select className={'layout__content__form__field__select'} name="placeId"
                placeholder={'Укажите местонаходение оборудования'}
                defaultValue={currentPlace.id || 'default'}
                ref={register({required: true})}>
          <option value="" disabled>Выберите помещение</option>
          {
            placesData.places.map(place => {
              if (place.parts) {
                return null
              }
              return (<option key={place.id} value={place.id}>{place.data.name}</option>
              )
            })
          }
        </select>
        {errors.placeId ? <span className={'layout__content__form__field__error'}>Обязательное поле</span> : null}
      </div>

      <button className={'button'} type="submit">Сохранить</button>
    </form>
  );
};
