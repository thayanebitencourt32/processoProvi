import React from 'react';
import * as S from './styles';
import { GlobalContext } from '../../contexts/GlobalContext';

const ProductCard = ({
  id,
  photoUrl,
  name,
  description,
  price,
  openModal,
  removeItemFromCart,
}) => {
  const { cart, setActualRestaurant, actualRestaurant } =
    React.useContext(GlobalContext);

  const findId = cart?.products.filter((product) => product.id === id);

  return (
    <S.ProductCard>
      <S.Image img={photoUrl} />
      <S.Infos>
        <S.Name>{name}</S.Name>
        <S.Price>{description}</S.Price>
        <p>R${price.toFixed(2).replace('.', ',')}</p>
      </S.Infos>
      {findId.length == 0 ? (
        <S.AddButton onClick={openModal}>adicionar</S.AddButton>
      ) : (
        <S.RemoveButton
          onClick={() => {
            removeItemFromCart(id);
            if (cart.products.length == 1) {
              setActualRestaurant({
                id: '',
                address: '',
                deliveryTime: '',
                shipping: '',
              });
            }
          }}
        >
          Remover
        </S.RemoveButton>
      )}
      {findId.length > 0 && <S.Quantity>{findId[0].quantity}</S.Quantity>}
    </S.ProductCard>
  );
};

export default ProductCard;
