import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import * as S from './styles'
import useAddAddress from '../../services/useAddAddress'
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios'
import { Toast } from '../../components/Toast'
import URL_BASE from '../../constants/urlBase'

const EditAddressForm = () => {
  const [form, onChange, clear, setForm] = useForm({ street: "", number: "", apartment: "", neighbourhood: "", city: "", state: "" })
  const addAddress = useAddAddress(form)
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmitAddressForm = (event) => {
    event.preventDefault()
    addAddress(setIsLoading)
  }

  const getFullAddress = () => {
    axios.get(`${URL_BASE}/profile/address`, {
      headers: {
        auth: localStorage.getItem("token")
      }
    })
      .then((response) => {
        setForm({ street: response.data.address.street, number: response.data.address.number, apartment: response.data.address.apartment, neighbourhood: response.data.address.neighbourhood, city: response.data.address.city, state: response.data.address.state })
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response,
        })
      })
  }

  React.useEffect(() => {
    getFullAddress()
  }, [])

  return (
    <S.AddressFormContainer>
      <form onSubmit={onSubmitAddressForm} autoComplete="off">
        <TextField
          name={"street"}
          value={form.street}
          onChange={onChange}
          type={"text"}
          label={"Endereço"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Rua/Avenida"}
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"number"}
          value={form.number}
          onChange={onChange}
          type={"number"}
          label={"Número"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Número"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"apartment"}
          value={form.apartment}
          onChange={onChange}
          type={"text"}
          label={"Complemento"}
          variant={"outlined"}
          margin={"normal"}
          fullWidth
          placeholder={"Apartamento/Bloco"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          type={"text"}
          label={"Bairro"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Bairro"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"city"}
          value={form.city}
          onChange={onChange}
          type={"text"}
          label={"Cidade"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Cidade"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name={"state"}
          value={form.state}
          onChange={onChange}
          type={"text"}
          label={"Estado"}
          variant={"outlined"}
          required
          margin={"normal"}
          fullWidth
          placeholder={"Estado"}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type={"submit"}
          variant="contained"
          margin={"normal"}
          fullWidth
          color={"primary"}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
        </Button>
      </form>
    </S.AddressFormContainer>
  )
}

export default EditAddressForm