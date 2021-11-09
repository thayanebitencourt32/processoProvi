
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import OrderInProgressCard from '../../components/OrderInProgressCard'
import * as S from './styles'
import search from '../../assets/search.svg'
import { useCoordinator } from '../../hooks/useCoordinator'
import RestaurantCard from '../../components/RestaurantCard'
import useGetRestaurants from '../../services/useGetRestaurants'
import { GlobalContext } from '../../contexts/GlobalContext'
import { categoriesRestaurants } from '../../constants/categories'
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useOrderInProgress } from '../../services/useOrderInProgress'


const Home = () => {
  useProtectedPage()
  const { orderInProgress, getOrderInProgress } = useOrderInProgress()

  const { restaurants } = React.useContext(GlobalContext)
  const [form, handleInputChange, clear] = useForm({ search: '' })
  const token = localStorage.getItem('token')

  const [restaurantCategoryFilter, setRestaurantCategoryFilter] =

  React.useState('Todos');

  const RestaurantsSearch = restaurants?.filter((restaurant) =>
    restaurant.name.startsWith(form.search)
  )

  const { getRestaurants, error } = useGetRestaurants()
  const goTo = useCoordinator()

  const filteredRestaurants = (category) => {
    return restaurants?.filter((restaurant) => restaurant.category === category)
  }


  useEffect(() => {
    getRestaurants(token)
    getOrderInProgress()
  }, [])


  return (
    <S.Home>
      <Header backButton title={'Rappi4'} />
      <main>
        {orderInProgress && Object.keys(orderInProgress).length > 0 && (
          <OrderInProgressCard data={orderInProgress} />
        )}
        <S.SearchBar>
          <img src={search} alt='Pesquisar' />
          <form autoComplete='off'>
            <S.InputSearch
              type='text'
              placeholder='Restaurante'
              autoFocus
              value={form.search}
              onChange={handleInputChange}
              name={'search'}
            />
          </form>
        </S.SearchBar>

        {error && <S.Error>{error}</S.Error>}

        {restaurants && (
          <>
            <S.Carousel>
              {categoriesRestaurants?.map((category) => (
                <S.Categories
                  key={category}
                  onClick={() => setRestaurantCategoryFilter(category)}
                  currentCategory={restaurantCategoryFilter}
                  categoryName={category}
                >
                  {category}
                </S.Categories>
              ))}
            </S.Carousel>

            {restaurantCategoryFilter === 'Todos' &&
              RestaurantsSearch?.map((restaurant) => (
                <RestaurantCard
                  onClick={() => goTo.RestaurantDetail(restaurant.id)}
                  key={restaurant.id}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                  logoUrl={restaurant.logoUrl}
                />
              ))}

            {form?.search?.length == 0 &&
              filteredRestaurants(restaurantCategoryFilter).map(
                (restaurant) => (
                  <RestaurantCard
                    onClick={() => goTo.RestaurantDetail(restaurant.id)}
                    key={restaurant.id}
                    name={restaurant.name}
                    deliveryTime={restaurant.deliveryTime}
                    shipping={restaurant.shipping}
                    logoUrl={restaurant.logoUrl}
                  />
                )
              )}

            {RestaurantsSearch?.length == 0 &&
              form?.search?.length > 0 &&
              filteredRestaurants(restaurantCategoryFilter).length === 0 && (
                <p>Não encontramos </p>
              )}

            {restaurantCategoryFilter !== 'Todos' && form.search.length > 0 && (
              <p>Faça uma busca na categoria "Todos".</p>
            )}
          </>
        )}
      </main>
      <Footer page='home' />
    </S.Home>
  )
}

export default Home
