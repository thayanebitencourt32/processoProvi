import React from 'react'
import AddressForm from '../../components/AddressForm'
import Header from '../../components/Header'
import * as S from './styles'
import useProtectedPage from '../../hooks/useProtectedPage'

const SignupAddress = () => {
  useProtectedPage()
  return (
    <>
      <Header backButton />
      <S.SignupAddressContainer>
        <h2>Seu endereço</h2>
        <AddressForm />
      </S.SignupAddressContainer>
    </>
  )
}

export default SignupAddress
