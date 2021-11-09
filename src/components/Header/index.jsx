import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

const Header = ({ backButton, title }) => {
  const history = useHistory();
  return (
    <S.Headers>
      {backButton && (
        <IconButton onClick={history.goBack} title='Voltar'>
          <img
            src={
              'https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/4FC8F2F3-EE15-457A-B114-9A92B2A97C8A.svg'
            }
            alt='Voltar'
          />
        </IconButton>
      )}
      <S.Tittle>{title}</S.Tittle>
    </S.Headers>
  );
};

export default Header;
