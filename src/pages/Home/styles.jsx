import styled from 'styled-components';

export const SearchBar = styled.div`
  box-sizing: border-box;
  margin: 0.5rem auto 0;
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  color: #d0d0d0;
  font-weight: normal;
  position: relative;

`;

export const InputSearch = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  left: 0;
  top: 1px;
  padding-left: 3.5rem;
  position: absolute;
  box-sizing: border-box;
  border: none;
  outline: none;
  ::-webkit-input-placeholder {
    color:#d0d0d0;
    font-size: 1rem;
  }
  input:-moz-placeholder {
    color:#d0d0d0;
    font-size: 1rem;
  }
`;

export const Carousel = styled.div`
  width: auto;
  max-width: 328px;
  overflow: overlay;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 20px 0;
  margin: 0.5rem auto;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Categories = styled.span`
  cursor: pointer;
  margin: 0 2.8rem 0 0;
  color: ${(props) =>
    props.currentCategory === props.categoryName ? '#e86e5a' : '#000'};
`;

export const Home = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  main {
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Error = styled.p`
  text-align: center;
`;
