import styled from 'styled-components';

export const RestaurantCard = styled.div`
  min-height: 190px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  width: 100%;
  max-width: 328px;
  margin: 0 auto 0.5rem;
`;

export const RestaurantCover = styled.div`
  height: 7.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: solid 1px #b8b8b8;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    backdrop-filter: blur(15px);
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const Title = styled.span`
  color: #e86e5a;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  color: #b8b8b8;
`;
