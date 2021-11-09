import React from "react";
import * as S from './styles'
import IconButton from "@material-ui/core/IconButton";
import { useCoordinator } from "../../hooks/useCoordinator";
import avatar_orange from '../../assets/avatar_orange.svg'
import avatar from '../../assets/avatar.svg'
import homepage_orange from '../../assets/homepage_orange.svg'
import homepage from '../../assets/homepage.svg'
import shopping_cart_orange from '../../assets/shopping_cart_orange.svg'
import shopping_cart from '../../assets/shopping_cart.svg'

const Footer = (props) => {
  const goTo = useCoordinator();
  return (
    <S.Footer>

      <IconButton title={'Página Principal'} onClick={goTo.Home} aria-label="home">
        <img src={props.page === 'home' ? homepage_orange : homepage}/>
      </IconButton>
      <IconButton title={'Carrinho'} onClick={goTo.Cart}  aria-label="cart">
        <img src={props.page === 'cart' ? shopping_cart_orange : shopping_cart}/>
      </IconButton>
      <IconButton title={'Perfil'} onClick={goTo.Profile} aria-label="profile">
        <img src={props.page === 'profile' ? avatar_orange : avatar}/>
      </IconButton>
    </S.Footer>
  );
};

export default Footer;
