import styled from 'styled-components'

export const Profile = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-height: 100vh;
  width: 100%;
  height: 100vh;
  letter-spacing: -0.39px;
  color: #000000;
  margin: 0 auto;
  
  main {
    overflow: auto;
  }

  section:nth-child(2){
    background-color: #eeeeee;

     p:nth-child(1){
       display: flex;
       justify-content: space-between;
       color: #b8b8b8;
       padding: 1rem 1rem 0 1rem;
       margin-bottom: 0.5rem;
       margin-right: 0.5rem;
     }
     p:nth-child(2){
      padding: 0 1rem 1rem 1rem;
      margin-top: 0;
     }
  }
`
export const UserData = styled.section`
   margin: 1rem 1rem 1rem 1rem;

   p:nth-child(1){
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: black;
      margin-bottom: -0.5rem;
      margin-right: 0.5rem;
     }
/* 
     img{
       display: flex;
       align-items: center;
     } */
     p:nth-child(2){
      display: flex;
      align-items: center;
      color: black;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
     }
     p:nth-child(3){
      display: flex;
      align-items: center;
      margin-top: -0.3rem;
     }
`
export const UserOrderHistory = styled.section`
  justify-self: center;
  margin: 1rem 1rem 1rem 1rem;
  height: 4.75rem;
`
export const OrderHistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 5.12rem;
  margin: 1rem auto;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

     p:nth-child(1){
      width: 296px;
      height: 18px;
      margin: 0 0 9px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #e86e5a;
     }

     p:nth-child(2){
      width: 296px;
      height: 18px;
      margin: 9px 0 7px;
      font-family: Roboto;
      font-size: 12px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.29px;
      color: #000;
     }

     p:nth-child(3){
      width: 296px;
      height: 18px;
      margin: 7px 0 0;
      font-family: Roboto;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #000;
     }
`