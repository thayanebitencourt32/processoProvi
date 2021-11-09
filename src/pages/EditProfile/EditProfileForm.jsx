import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as S from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import useUpdateProfile from '../../services/useUpdateProfile'
import axios from 'axios'
import { Toast } from '../../components/Toast'
import URL_BASE from '../../constants/urlBase'

const EditProfileForm = () => {
  const [form, onChange, clear, setForm] = useForm({ name: "", email: "", cpf: "" })
  const [isLoading, setIsLoading] = React.useState(false)
  const updateProfile = useUpdateProfile(form)

  const onSubmitEditProfileForm = (event) => {
    event.preventDefault()
    updateProfile(setIsLoading)
  }

  const getProfile = () => {
    axios.get(`${URL_BASE}/profile`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        setForm({ name: response.data.user.name, email: response.data.user.email, cpf: response.data.user.cpf})
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message,
        })
      })
    }


  React.useEffect(() => {
    getProfile()
  }, [])

  return (
    <S.EditProfileForm>
      <form onSubmit={onSubmitEditProfileForm}>
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
          type={"text"}
          label={"CPF"}
          variant={"outlined"}
          required
          fullWidth
          margin={"normal"}
          placeholder={"000.000.000-00"}
          inputProps={{ pattern: "[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}" }}
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
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
        </Button>
      </form>
    </S.EditProfileForm>
  )
}
export default EditProfileForm