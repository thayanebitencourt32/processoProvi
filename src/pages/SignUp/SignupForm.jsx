import React from "react"
import useForm from "../../hooks/useForm"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import * as S from "./styles"
import useSignup from "../../services/useSignup"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Toast } from '../../components/Toast'

const SignupForm = () => {
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  })
  const signup = useSignup(form)
  const [isLoading, setIsLoading] = React.useState(false);

  const modulatedCPF = () => {
    return form.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
  }

  const onSubmitSignupForm = (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      Toast.fire({
        icon: 'error',
        title: 'As senhas estão diferentes',
      })
    } else {
      form.cpf = modulatedCPF()
      signup(setIsLoading)
    }
  }

  return (
    <S.SignupFormContainer>
      <form onSubmit={onSubmitSignupForm} autoComplete="off">
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          type={"text"}
          label={"Nome"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"Nome e sobrenome"}
          InputLabelProps={{
            shrink: true,
          }}
        />
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
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          type={"number"}
          label={"CPF"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          placeholder={"000.000.000-00"}
          inputProps={{
            pattern: "/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,",
          }}
          maxlength="14"
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={"password"}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ pattern: "^.{6,}$" }}
          title={"A senha deve ter no mínimo 6 caracteres"}
          placeholder={"Mínimo 6 caracteres"}
          required
        />
        <TextField
          id={"confirmPassword"}
          name={"confirmPassword"}
          value={form.confirmPassword}
          onChange={onChange}
          type={"password"}
          label={"Confirmar"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          placeholder={"Confirme a senha anterior"}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <Button type={"submit"} variant="contained" color="primary" fullWidth>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Criar</>
          )}
        </Button>
      </form>
    </S.SignupFormContainer>
  );
};

export default SignupForm;
