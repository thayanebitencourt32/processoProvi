import axios from "axios"
import URL_BASE from "../constants/urlBase"
import { useCoordinator } from "../hooks/useCoordinator"
import { Toast } from '../components/Toast'

const useSignupAddress = (body) => {
  const goTo = useCoordinator()

  const signupAddress = (setIsLoading) => {
    setIsLoading(true)
    axios.put(`${URL_BASE}/address`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goTo.Home()
        setIsLoading(false)
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message,
        })
        setIsLoading(false)
      })
  }
  return signupAddress

}
export default useSignupAddress