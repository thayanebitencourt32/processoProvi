import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as S from './styles';
import axios from 'axios';
import URL_BASE from '../../constants/urlBase';
import Edit from '../../assets/edit.svg';
import { useCoordinator } from '../../hooks/useCoordinator';
import useGetProfile from '../../services/useGetProfile';
import { GlobalContext } from '../../contexts/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage'
import { Toast } from '../../components/Toast'

const Profile = () => {
  useProtectedPage()
  const [orders, setOrders] = React.useState([]);
  const goTo = useCoordinator();
  const { getProfile } = useGetProfile();
  const { profile } = React.useContext(GlobalContext);

  const getOrdersHistory = () => {
    axios
      .get(`${URL_BASE}/orders/history`, {
        headers: {
          auth: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message,
        })
      });
  };

  const convertDate = (timestamp) => {
    let time = new Date(timestamp)
    let day = time.getDate().toString().padStart(2, '0')
    let month = (time.getMonth() + 1).toString().padStart(2, '0')
    let year = time.getFullYear()

    return `${day}/${month}/${year}`;
  };

  const showOrders =
    orders.length > 0 ? (
      orders.map((order, index) => (
        <S.OrderHistoryCard key={index}>
          <p>{order.restaurantName}</p>
          <p>{convertDate(order.createdAt)}</p>
          <p>SUBTOTAL R${order.totalPrice.toFixed(2).replace(/\./g, ',')}</p>
        </S.OrderHistoryCard>
      ))
    ) : (
      <p style={{ textAlign: 'center' }}>Você não realizou nenhum pedido</p>
    );

  React.useEffect(() => {
    getProfile();
  }, []);

  React.useEffect(() => {
    getOrdersHistory()
  }, [])

  return (
    <S.Profile>
      <Header title={'Meu perfil'} />
      <main>
        <S.UserData>
          <p>
            {profile.name}
            <img onClick={goTo.EditProfile} src={Edit} alt={'Ícone de edit'} />
          </p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </S.UserData>
        <section>
          <p>
            Endereço de cadastro
            <img onClick={goTo.EditAddress} src={Edit} alt={'Ícone de edit'} />
          </p>
          <p>{profile.address}</p>
        </section>
        <S.UserOrderHistory>
          <p>Seu histórico</p>
          <hr />
          {showOrders}
        </S.UserOrderHistory>
      </main>
      <Footer page='profile' />
    </S.Profile>
  );
};

export default Profile;
