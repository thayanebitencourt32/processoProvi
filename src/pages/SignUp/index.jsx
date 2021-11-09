import React from 'react'
import SignupForm from './SignupForm'
import logo from '../../assets/logo.png'
import * as S from './styles'
import Header from '../../components/Header'
import useUnprotectedPage from '../../hooks/useUnProtectedPage'

const Signup = () => {
  useUnprotectedPage()
  return (
    <>
    <Header backButton/>
    <S.SignupMainContainer>
      <img src={logo} alt={"Logo da HappyFour"}/>
      <h1>Cadastre-se</h1>
      <SignupForm />
    </S.SignupMainContainer>
    </>
  )
}

export default Signup;
