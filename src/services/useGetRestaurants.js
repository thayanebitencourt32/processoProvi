import React from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'
import { GlobalContext } from '../contexts/GlobalContext'


const useGetRestaurants = () => {

  const { setRestaurants } = React.useContext(GlobalContext)
  const [error, setError] = React.useState('')

  let response
  const getRestaurants = async (token) => {
    const headers = {
      headers: {
        ContentType: 'application/json',
        auth: token,
      },
    }
    try {
      response = await axios.get(`${URL_BASE}/restaurants`, headers)
    } catch (err) {
      setError(err?.response?.data?.message)
    } finally {
      setRestaurants(response?.data?.restaurants)
    }
  }

  return { error, getRestaurants}
}

export default useGetRestaurants
