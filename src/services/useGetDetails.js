import React from 'react'
import axios from 'axios'
import URL_BASE from '../constants/urlBase'

const useGetDetails = () => {

  const [data, setData] = React.useState('')
  const [error, setError] = React.useState('')

  let response
  const getDetails = async (token, id) => {
    const headers = {
      headers: {
        ContentType: 'application/json',
        auth: token,
      },
    }
    try {
      response = await axios.get(`${URL_BASE}/restaurants/${id}`, headers)
    } catch (err) {
      setError(err?.response?.data?.message)
    } finally {
      setData(response.data.restaurant)
    }
  }

  return { data, error, getDetails}
}

export default useGetDetails
