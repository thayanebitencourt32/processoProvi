import { useHistory } from 'react-router-dom'

export const useCoordinator = () => {
  let history = useHistory()
  const goTo = {
    Cart: () => history.push('/cart'),
    EditAddress: () => history.push('/profile/edit-address'),
    EditProfile: () => history.push('/profile/edit-profile'),
    Home: () => history.push('/'),
    Login: () => history.push('/login'),
    Profile: () => history.push('/profile'),
    RestaurantDetail: (id) => history.push(`/restaurants/${id}`),
    SignUp: () => history.push('/signup'),
    SignUpAdress: () => history.push('/signup-address'),
    Search: () => history.push('/search'),
  }

  return goTo
}
