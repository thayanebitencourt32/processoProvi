
import Button from '@material-ui/core/Button'
import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { Toast } from '../../components/Toast'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useCoordinator } from '../../hooks/useCoordinator'
import useGetProfile from '../../services/useGetProfile'
import usePlaceOrder from '../../services/usePlaceOrder'
import cartIcon from '../../assets/shopping_cart_orange.svg'
import * as S from './styles'



const Cart = () => {
  const {
    setCart,
    cart,
    profile,
    actualRestaurant,
    setActualRestaurant,
    cartProducts,
    setCartProducts,
  } = React.useContext(GlobalContext)
  const [totalPrice, setTotalPrice] = React.useState(0)
  const goTo = useCoordinator()
  const { placeOrder } = usePlaceOrder()
  const { getProfile } = useGetProfile()

  const getInfosAndPlaceOrder = () => {
    if (
      cart.paymentMethod !== '' &&
      cart.products.length > 0 &&
      actualRestaurant.id !== ''
    ) {
      placeOrder(actualRestaurant.id, cart)
      setCartProducts([])
      setActualRestaurant({
        id: '',
        address: '',
        deliveryTime: '',
        shipping: '',
        name: '',
      })
      setCart({
        products: [],
        paymentMethod: '',
      })
      setTimeout(() => goTo.Home(), 3000)
    } else if (cart.paymentMethod === '' && cart.products.length > 0) {
      Toast.fire({
        icon: 'error',
        title: 'Selecione a opção de pagamento.',
      })
    } else if (cart.products.length == 0 && cart.paymentMethod !== '') {
      Toast.fire({
        icon: 'error',
        title: 'Adicionar ao carrinho.',
      })
    } else {
      Toast.fire({
        icon: 'error',
        title:
          'Adicione o(s) item(ns) ao carrinho, escolha opção de pagamento para prosseguir.',
      })
    }
  }


  useEffect(() => {
    getProfile()
    calculateTotalPrice()
  }, [])

  const calculateTotalPrice = () => {
    let totalPrice = 0
    let el
    for (const p of cartProducts) {
      el = cart.products.find((el) => el.id === p.id)
      if (el && Object.keys(el).length > 0) {
        totalPrice += p.price * el.quantity
      }
    }
    setTotalPrice(totalPrice)
  }


  const removeItemFromCart = (id) => {
    const spreadCart = cart
    const filteredSpreadCart = spreadCart.products?.filter(
      (product) => product.id !== id
    )
    setCart({ ...cart, products: filteredSpreadCart })

    const spreadCartProducts = cartProducts
    const filteredSpreadCartProducts = spreadCartProducts.filter(
      (product) => product.id !== id
    )
    setCartProducts(filteredSpreadCartProducts)
  }

  return (
    <S.Cart>
      <Header backButton title='Meu carrinho' />
      <S.MainContainer>
        {actualRestaurant.id ? (
          <>
            <S.UserAdress>
              <div>
                <p>Endereço de entrega</p>
                <p>{profile.address}</p>
              </div>
            </S.UserAdress>

            <S.RestaurantInfos>
              <div>
                <p>{actualRestaurant.name}</p>
                <p>{actualRestaurant.address}</p>
                <p>{actualRestaurant.deliveryTime}min</p>
              </div>
            </S.RestaurantInfos>

            <S.CardsContainer>
              <S.InsideContainer>
                {cartProducts.length > 0 &&
                  cartProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      photoUrl={product.photoUrl}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      removeItemFromCart={removeItemFromCart}
                    />
                  ))}
              </S.InsideContainer>
            </S.CardsContainer>

            <div>
              <S.PriceContainer>
                <S.Price>
                  {totalPrice ? (
                    <>
                      <span>SUBTOTAL</span>
                      <span>R${totalPrice.toFixed(2).replace('.', ',')}</span>
                    </>
                  ) : (
                    <>
                      <span>SUBTOTAL</span>
                      <span>R$00,00</span>
                    </>
                  )}
                </S.Price>

                <S.Price>
                  {actualRestaurant.id ? (
                    <>
                      <span>FRETE</span>
                      <span>R${actualRestaurant.shipping},00</span>
                    </>
                  ) : (
                    <>
                      <span>FRETE</span>
                      <span>R$00,00</span>
                    </>
                  )}
                </S.Price>

                <S.Price>
                  {totalPrice && actualRestaurant.shipping ? (
                    <>
                      <span>TOTAL</span>
                      <span>
                        R$
                        {(totalPrice + actualRestaurant.shipping)
                          .toFixed(2)
                          .replace('.', ',')}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>TOTAL</span>
                      <span>R$00,00</span>
                    </>
                  )}
                </S.Price>
              </S.PriceContainer>

              <S.PaymentMethod>
                <S.InsideContainer>
                  <span>Forma de pagamento</span>
                  <form onSubmit={(ev) => ev.preventDefault()}>
                    <S.Hr />
                    <S.PaymentOption>
                      <input
                        type='radio'
                        id='dinheiro'
                        name='paymentmethod'
                        onChange={() =>
                          setCart({ ...cart, paymentMethod: 'money' })
                        }
                      />
                      <label htmlFor='dinheiro'>Dinheiro</label>
                    </S.PaymentOption>
                    <S.PaymentOption>
                      <input
                        type='radio'
                        id='cartao'
                        name='paymentmethod'
                        onChange={() =>
                          setCart({ ...cart, paymentMethod: 'creditcard' })
                        }
                      />
                      <label htmlFor='cartao'>Cartão de crédito</label>
                    </S.PaymentOption>
                    <Button
                      onClick={() => getInfosAndPlaceOrder()}
                      type={'button'}
                      variant='contained'
                      color='primary'
                      fullWidth
                    >
                      Confirmar
                    </Button>
                  </form>
                </S.InsideContainer>
              </S.PaymentMethod>
            </div>
          </>
        ) : (
          <S.EmptyCart>
            <img src={cartIcon} alt="Cart" />
            <p>Carrinho vazio</p>
          </S.EmptyCart>
        )}
      </S.MainContainer>
      <Footer page='cart' />
    </S.Cart>
  )
}

export default Cart
