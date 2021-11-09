import styled from 'styled-components'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

export const Headers = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  height: 3.375rem;
  align-items: center;
  justify-items:  center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

`

export const Tittle = styled.h1`
  font-size: 1rem;
  text-align: center;
  grid-column: 2/3;
`

export const BackIcon = styled(ArrowBackIosRoundedIcon)`
justify-self: flex-start;
margin-left: 1rem
`