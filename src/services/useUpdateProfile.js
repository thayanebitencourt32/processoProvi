import axios from "axios"
import URL_BASE from "../constants/urlBase"
import { useCoordinator } from "../hooks/useCoordinator"
import { Toast } from '../components/Toast'

const useUpdateProfile = (body) => {
  const goTo = useCoordinator()

  const updateProfile = (setIsLoading) => {
    setIsLoading(true)
    axios.put(`${URL_BASE}/profile`, body, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then(() => {
        goTo.Profile()
        setIsLoading(false)
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response,
        })
        setIsLoading(false)
      })
  }
  return updateProfile
}
export default useUpdateProfile