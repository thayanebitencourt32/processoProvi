import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  height: 7rem;
  margin: 1.25rem 0;
  border: solid 1px #f3c9c2;
  border-radius: 0.5rem;
  width: 100%;
  position: relative;
  p {
    margin: 0 0 6px 0;
  }
`;

export const Name = styled.p`
  color: #e86e5a;
`;

export const Price = styled.p`
  color: #b8b8b8;
  font-size: 14px;
`;

export const Image = styled.div`
  width: 6.8rem;
  height: 7rem;
  margin-right: 1rem;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem 0 0 0.5rem; ;
`;

export const AddButton = styled.button`
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: #fff;
  border: 1px solid #e02020;
  color: #e02020;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.5rem 0 0.5rem 0; ;
`;
export const RemoveButton = styled.button`
  position: absolute;
  right: -1px;
  bottom: -1px;
  background-color: #e86e5a;
  color: #fff;
  border: 1px solid #e86e5a;
  height: 2rem;
  width: 5.6rem;
  border-radius: 0.5rem 0 0.5rem 0;
`;

export const Quantity = styled.button`
  position: absolute;
  right: -1px;
  top: -1px;
  background-color: #e86e5a;
  border: 1px solid #e86e5a;
  color: #fff;
  height: 2rem;
  width: 2rem;
  border-radius: 0 0.5rem 0 0.5rem; ;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 10rem;
`;
