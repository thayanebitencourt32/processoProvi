import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCoordinator } from './useCoordinator'

const useUnprotectedPage = () => {
  const goTo = useCoordinator()
  const history = useHistory()
  React.useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goTo.Home()
    }
  }, [history])
}

export default useUnprotectedPage