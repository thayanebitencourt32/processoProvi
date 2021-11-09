import React from 'react'
import axios from 'axios'
import URL_BASE from "../constants/urlBase"

export function useOrderInProgress() {
  const [orderInProgress, setOrderInProgress] = React.useState({})

  const getOrderInProgress = () => {
    axios
      .get(`${URL_BASE}/active-order`, {
        headers: {
          auth: localStorage.getItem('token'),
          ContentType: 'application/json',
        },
      })
      .then((response) => {
        setOrderInProgress(response.data?.order)
      })
  }

  return { getOrderInProgress, orderInProgress }
}
