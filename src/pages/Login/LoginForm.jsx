import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as S from './styles'
import useLogin from '../../services/useLogin'
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = () => {
  const [form, onChange] = useForm({ email: "", password: "" })
  const login = useLogin(form)
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmitLoginForm = (event) => {
    event.preventDefault()
    login(setIsLoading)
  }

  return (
    <S.LoginFormContainer>
      <form onSubmit={onSubmitLoginForm} autoComplete="off">
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          type={"email"}
          label={"e-mail"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"email@email.com"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={"password"}
          label={"Senha"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"Mínimo 6 caracteres"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type={"submit"}
          variant="contained"
          color="primary"
          fullWidth
        >
          {isLoading? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}
        </Button>
      </form>
    </S.LoginFormContainer>
  )
}

export default LoginForm