import axios from "axios"
import URL_BASE from "../constants/urlBase"
import { useCoordinator } from "../hooks/useCoordinator"
import { Toast } from '../components/Toast'

const useSignup = (body) => {
  const goTo = useCoordinator()

  const signup = (setIsLoading) => {
    setIsLoading(true)
    axios.post(`${URL_BASE}/signup`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        goTo.SignUpAdress()
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
  return signup
}
export default useSignup