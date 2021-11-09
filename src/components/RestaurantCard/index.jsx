import React from 'react'
import * as S from './styles'

const RestaurantCard = ({ name, deliveryTime, shipping, logoUrl, onClick }) => {
  return (
    <S.RestaurantCard onClick={onClick}>
      <S.RestaurantCover imgUrl={logoUrl}>
        <img src={logoUrl} alt={name} />
      </S.RestaurantCover>

      <S.Info>
        <S.Title>{name}</S.Title>
      </S.Info>

      <S.Info>
        <span>
          {deliveryTime} - {(deliveryTime += 10)}min
        </span>
        <span>Frete R${shipping},00</span>
      </S.Info>
    </S.RestaurantCard>
  )
}

export default RestaurantCard
