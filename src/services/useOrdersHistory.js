import React from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'
import { Toast } from '../../components/Toast'

const useOrdersHistory = () => {
  const [orders, setOrders] = React.useState([])

  const getOrdersHistory = () => {
    axios.get(`${URL_BASE}/orders/history`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
    .then((response) => {
      setOrders(response.data)
    })
    .catch((err) => {
      Toast.fire({
        icon: 'error',
        title: err.response.data.message,
      })
    })
  }
  return getOrdersHistory
}

export default useOrdersHistory