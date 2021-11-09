import React from 'react'
import LoginForm from './LoginForm'
import logo from '../../assets/logo.png'
import * as S from './styles'
import Button from '@material-ui/core/Button'
import { useCoordinator } from '../../hooks/useCoordinator'
import useUnprotectedPage from '../../hooks/useUnProtectedPage'

const Login = () => {
  useUnprotectedPage()
  const goTo = useCoordinator()

  return (
    <S.LoginMainContainer>
      <img src={logo} alt={"Logo da Happyfood"} />
      <h1>Entrar</h1>
      <LoginForm />
      <Button
        type={"submit"}
        color="secondary"
        fullWidth
        margin={"normal"}
        onClick={goTo.SignUp}
      >
        Não tem cadastro? Clique aqui.
      </Button>
    </S.LoginMainContainer>
  )
}

export default Login
