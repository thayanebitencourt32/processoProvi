import React from 'react'
import Header from '../../components/Header'
import EditAddressForm from '../EditAddress/EditAddressForm'
import * as S from './styles'
import useProtectedPage from '../../hooks/useProtectedPage'

const EditAddress = () => {
  useProtectedPage()
  return (
    <>
      <Header backButton title="Endereço" />
      <S.EditAddress>
        <EditAddressForm />
      </S.EditAddress>
    </>
  )
}

export default EditAddress
