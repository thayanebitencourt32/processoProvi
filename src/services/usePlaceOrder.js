import React from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'
import { Toast } from '../components/Toast'

const usePlaceOrder = () => {

  const [data, setData] = React.useState('')

  const placeOrder = (restaurantId, body) => {
    axios
      .post(`${URL_BASE}/restaurants/${restaurantId}/order`,
        body,
        {
          headers: {
            auth: localStorage.getItem('token'),
            ContentType: 'application/json',
          },
        })
      .then((response) => {
        setData(response.data);
        Toast.fire({
          icon: 'success',
          title: 'Pedido realizado com sucesso',
        })
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message,
        })
      });
  };
  return { data, placeOrder }

}

export default usePlaceOrder
