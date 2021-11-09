import React from 'react';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import * as S from './styles';
import useGetDetails from '../../services/useGetDetails';
import { categoriesMeals } from '../../constants/categories';
import ProductCard from '../../components/ProductCard';
import { GlobalContext } from '../../contexts/GlobalContext';
import ShowModal from '../../components/Modal';
import useProtectedPage from '../../hooks/useProtectedPage';
import Footer from '../../components/Footer';

const RestaurantDetails = () => {
  useProtectedPage();
  const { setCart, cart, cartProducts, setCartProducts } = React.useContext(GlobalContext);
  const { restaurantId } = useParams();
  const { getDetails, data } = useGetDetails();

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    getDetails(token, restaurantId);
  }, []);

  const filterMeal = (category) => {
    return data && data.products.filter((item) => item.category === category);
  };

  const returnFilteredProducts = () => {
    let filteredProducts = [];
    for (const category of categoriesMeals) {
      filterMeal(category).length > 0 &&
        filteredProducts.push(filterMeal(category));
    }
    return filteredProducts;
  };

  const addItemToCart = (id, quantity) => {
    const spreadCart = cart;
    spreadCart.products.push({
      id: id,
      quantity: quantity,
    });
    setCart(spreadCart);
  };

  const removeItemFromCart = (id) => {
    const spreadCart = cart;
    const filteredSpreadCart = spreadCart.products?.filter(
      (product) => product.id !== id
    );
    setCart({ products: filteredSpreadCart });

    const spreadCartProducts = cartProducts;
    const filteredSpreadCartProducts = spreadCartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredSpreadCartProducts);
  };

  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [quantity, setQuantity] = React.useState('');

  return (
    <S.DetailsContainer>
      <Header backButton title='Restaurante' />
      <S.MainContainer>
        {data && (
          <>
            <ShowModal
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              quantity={quantity}
              setQuantity={setQuantity}
              product={product}
              addItemToCart={addItemToCart}
              restaurantId={restaurantId}
              data={data}
            />
            <S.RestaurantCover imgUrl={data.logoUrl}>
              <img src={data.logoUrl} alt={data.name} />
            </S.RestaurantCover>

            <S.Details>
              <S.Title>{data.name}</S.Title>
              <p>{data.category}</p>
              <S.DoubleInfos>
                <p>
                  {data.deliveryTime} - {data.deliveryTime + 10}min
                </p>
                <p>Frete R${data.shipping}, 00</p>
              </S.DoubleInfos>
              <p>{data.address}</p>
            </S.Details>

            {returnFilteredProducts().map((array, index) => (
              <div key={index}>
                <S.Category>{array[0].category}</S.Category>
                <S.Hr />
                {array.map((product) => (
                  <ProductCard
                    key={product.id}
                    photoUrl={product.photoUrl}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    openModal={() => {
                      setProduct({
                        id: product.id,
                        photoUrl: product.photoUrl,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                      });
                      handleOpen();
                    }}
                    removeItemFromCart={removeItemFromCart}
                  />
                ))}
              </div>
            ))}
          </>
        )}
      </S.MainContainer>
      <Footer />
    </S.DetailsContainer>
  );
};

export default RestaurantDetails;
