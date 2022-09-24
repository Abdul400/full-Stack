import styled from 'styled-components';

export const PrimaryContainer = styled.div`
  margin-top: 4rem;
  width: 85%;
  height: 28rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    height: 25rem;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
    margin-top: 0;
    height: 100%;
  }
`;

//picture container
export const PictureContainer = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    width: 40%;
    height: 90%;
  }
  @media screen and (max-width: 700px) {
    width: 50%;
    height: 90%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 70%;
  }
`;
export const ContentContaner = styled.div`
  overflow: hidden;
  width: 50%;
  height: 100%;
  padding-top: 3rem;
  position: relative;
  @media screen and (max-width: 1100px) {
    width: 45%;
  }
  @media screen and (max-width: 950px) {
    padding-top: 0;
  }
  @media screen and (max-width: 550px) {
    padding-top: 0;
    width: 100%;
    padding: 20px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 75%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 550px) {
    height: 100%;
    border-radius: 0px;
  }
`;
export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
export const Thumbnails = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    outline: 2px solid #ff7d1b;
  }
  @media screen and (max-width: 1100px) {
    width: 4rem;
    height: 4rem;
  }
  @media screen and (max-width: 950px) {
    width: 3rem;
    height: 3rem;
  }
  @media screen and (max-width: 700px) {
    //width: 35rem;
  }
  @media screen and (max-width: 620px) {
    width: 3rem;
    height: 3rem;
  }
  /* @media screen and (max-width: 550px) {
  } */
`;
export const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  transition: opacity 0.5s ease-in;
  &:hover {
    opacity: 0.3;
  }
`;

//content container
export const Header1 = styled.h4`
  font-family: 'Kumbh Sans', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: #ff7d1b;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;
export const Header2 = styled.h1`
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: black;
  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
  /* @media screen and (max-width: 700px) {
    //width: 35rem;
  }
  @media screen and (max-width: 550px) {
  } */
  @media screen and (max-width: 685px) {
    font-size: 20px;
  }
`;
export const Paragraph = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 400;
  color: #696a6e;
  font-size: 13px;
  line-height: 20px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 685px) {
    font-size: 12px;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 650px) {
    margin-top: 1.1rem;
  }
`;
export const Price = styled.p`
  color: black;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 23px;
`;
export const Discount = styled.p`
  color: #ff7d1b;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  left: 4.3rem;
  bottom: 1.4rem;
  width: 35px;
  @media screen and (max-width: 550px) {
    margin-right: auto;
  }
`;
export const DiscountPrice = styled.p`
  color: #adb0b8;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  bottom: 0.5rem;
  text-decoration: line-through;
  @media screen and (max-width: 550px) {
    position: relative;
    right: 2em;
    bottom: 2.6rem;
    left: 80%;
  }
`;
export const Minus = styled.img`
  width: 1rem;
  cursor: pointer;
`;
export const Plus = styled.img`
  width: 1rem;
  cursor: pointer;
`;
export const CartImg = styled.img`
  width: 0.9rem;
  @media screen and (max-width: 600px) {
    width: 0.7rem;
  }
  @media screen and (max-width: 550px) {
    width: 1.2rem;
  }
`;
export const Counter = styled.p`
  font-family: 'Kumbh Sans', sans-serif;
  color: black;
  font-size: 14px;
  font-weight: 600;
`;
export const Cart = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    height: 8rem;
    width: 100%;
  }
`;
export const CounterContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 550px) {
    height: 50%;
    width: 100%;
  }
`;
export const AddToCart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 550px) {
    height: 50%;
    width: 100%;
  }
`;
export const AddToCartText = styled.p`
  color: white;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  @media screen and (max-width: 700px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
    margin-left: 10px;
  }
`;
export const AddToCartContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: #ff7d1b;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ffac6a;
  }
  @media screen and (max-width: 550px) {
    height: 90%;
    justify-content: center;
  }
`;
export const CartCounter = styled.div`
  width: 1.3rem;
  height: 0.8rem;
  border-radius: 10px;
  position: absolute;
  top: 2rem;
  right: 8.5rem;
  background-color: #ff7d1b;
  color: white;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1100px) {
    right: 6.7rem;
  }
  @media screen and (max-width: 950px) {
    right: 5rem;
  }
  @media screen and (max-width: 700px) {
    right: 4rem;
  }
  @media screen and (max-width: 620px) {
    right: 3.5rem;
  }
  @media screen and (max-width: 550px) {
    right: 6rem;
  }
  @media screen and (max-width: 495px) {
    right: 5.4rem;
  }
  @media screen and (max-width: 445px) {
    right: 4.8rem;
  }
  @media screen and (max-width: 405px) {
    right: 3.8rem;
  }
  @media screen and (max-width: 360px) {
    right: 4.2rem;
  }
  @media screen and (max-width: 310px) {
    right: 3.5rem;
  }
  @media screen and (min-width: 1250px) {
    right: 7%;
  }
`;

export const CartContentsContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: 1rem;
  height: 11.5rem;
  width: 18rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 15px 20px 0px #cccccd;
  z-index: 5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    z-index: 20;
    position: absolute;
    width: 90%;
    height: 17rem;
    left: 5%;
    top: 7rem;
  }
  @media screen and (max-width: 350px) {
    height: 14rem;
  }
  @media screen and (max-width: 350px) {
    height: 12rem;
  }
`;
export const CartText = styled(Price)`
  font-size: 15px;
  position: absolute;
  bottom: 10rem;
  right: 15.5rem;
  @media screen and (max-width: 550px) {
    left: 1.5rem;
    top: 1rem;
  }
`;
export const EmptyCart = styled.div`
  color: #8b8c91;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
`;
export const Checkout = styled.div`
  height: 70%;
  width: 100%;
  @media screen and (max-width: 350px) {
    height: 85%;
  }
  @media screen and (max-width: 550px) {
    padding: 15px;
  }
`;
export const CheckoutData = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CheckoutThumbnail = styled.div`
  height: 100%;
  width: 20%;
  border-radius: 5px;
  overflow: hidden;
  @media screen and (max-width: 550px) {
    height: 80%;
  }
`;
export const FinalThumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
export const CheckoutCalculation = styled.div`
  height: 100%;
  width: 65%;
`;
export const Item = styled(Paragraph)`
  font-size: 12px;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 350px) {
    font-size: 11px;
  }
  @media screen and (max-width: 550px) {
    top: 4px;
  }
`;
export const Data = styled.span`
  color: black;
  font-weight: 600;
  position: relative;
  left: 4.7rem;
  bottom: 1.2rem;
  @media screen and (max-width: 350px) {
    font-size: 12px;
  }
  @media screen and (max-width: 550px) {
    bottom: 1rem;
  }
`;
export const DeleteIcon = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
export const CheckoutButtonContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 0.7rem;
  @media only screen and (max-width: 550px) {
    margin-top: 0;
  }
`;
export const CheckoutButton = styled.button`
  height: 80%;
  width: 100%;
  border-radius: 10px;
  background-color: #ff7d1b;
  color: white;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
export const PreviousButtoncontainers = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NextButtoncontainers = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PreviousButton = styled.img``;
export const NextButton = styled.img``;
