import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100vh;
`;

export const RestaurantCover = styled.div`
  height: 7.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: solid 1px #b8b8b8;
  margin: 1rem 0 0.5rem;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    backdrop-filter: blur(2px);
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 22rem;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
  overflow: auto;
`;

export const Details = styled.div`
  color: #b8b8b8;
  p {
    margin: 0 0 0.5rem 0;
  }
`;

export const Title = styled.p`
  color: #e86e5a;
`;

export const DoubleInfos = styled.div`
  width: 100%;
  display: flex;
  p:nth-child(1) {
    margin-right: 3rem;
  }
`;

export const Category = styled.h2`
  font-size: 18px;
  margin-top: 2.25rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
  color: #000;
  font-family: 'Roboto', sans-serif;
`;

export const Hr = styled.hr`
  border-color: transparent;
  border-bottom-color: black;
  margin-bottom: 1rem;
`;
