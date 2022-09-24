import React from 'react';
import 'animate.css';
import {
  PrimaryContainer,
  PictureContainer,
  ContentContaner,
  ImageContainer,
  MainImage,
  ThumbnailContainer,
  Thumbnails,
  ThumbnailImage,
  Header1,
  Header2,
  Paragraph,
  Price,
  Discount,
  DiscountPrice,
  Minus,
  Plus,
  Counter,
  Cart,
  CounterContainer,
  AddToCart,
  AddToCartContainer,
  CartImg,
  AddToCartText,
  CartCounter,
  CartContentsContainer,
  CartText,
  EmptyCart,
  Checkout,
  CheckoutData,
  CheckoutThumbnail,
  CheckoutCalculation,
  CheckoutButtonContainer,
  CheckoutButton,
  DeleteIcon,
  FinalThumbnail,
  Item,
  Data,
  PreviousButton,
  NextButton,
  PreviousButtoncontainers,
  NextButtoncontainers,
} from './styledComponents/Exhibit.styled';
import { mainPictureArray } from '../assets/images';
import { thumbnailsArray } from '../assets/images';
import minusImg from '../assets/images/icon-minus.svg';
import plusImg from '../assets/images/icon-plus.svg';
import cartImg from '../assets/images/icon-cart2.svg';
import deleteicon from '../assets/images/icon-delete.svg';
import previousbutton from '../assets/images/icon-previous.svg';
import nextbutton from '../assets/images/icon-next.svg';
import { useState } from 'react';

const Exhibit = ({ cartisOpen, openCart, isMobile, openGallery }) => {
  console.log(cartisOpen);
  let [count, setCount] = useState(0);
  let [cartCount, setCartCount] = useState(0);
  let [imgSrc, setImgSrc] = useState(mainPictureArray[0]);

  let myThumbnailArray = thumbnailsArray.map((thumbnail) => {
    function imgSrcFinder(e) {
      let index = thumbnailsArray.indexOf(e.target.src);
      setImgSrc(mainPictureArray[index]);
    }
    return (
      <Thumbnails>
        <ThumbnailImage src={thumbnail} onClick={(e) => imgSrcFinder(e)} />
      </Thumbnails>
    );
  });

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function decreaseCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  function addToCart() {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount + count);
      setCount(0);
    } else {
      setCartCount(count);
      setCount(0);
    }
  }
  return (
    <PrimaryContainer>
      <PictureContainer>
        <ImageContainer>
          {isMobile && (
            <PreviousButtoncontainers>
              <PreviousButton
                src={previousbutton}
                alt="previous Image"
              ></PreviousButton>
            </PreviousButtoncontainers>
          )}
          {isMobile && (
            <NextButtoncontainers>
              <NextButton src={nextbutton} alt="next image"></NextButton>
            </NextButtoncontainers>
          )}
          <MainImage
            src={imgSrc}
            onClick={() => openGallery()}
            alt=""
          ></MainImage>
        </ImageContainer>
        <ThumbnailContainer>{myThumbnailArray}</ThumbnailContainer>
      </PictureContainer>
      <ContentContaner>
        <Header1>Sneaker Company</Header1>
        <Header2>Fall Limited Edition Sneakers</Header2>
        <Paragraph>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Paragraph>
        <Price>$125</Price>
        <Discount>50%</Discount>
        <DiscountPrice>$250.00</DiscountPrice>
        <Cart>
          <CounterContainer>
            <Minus src={minusImg} onClick={decreaseCount}></Minus>
            <Counter>{count}</Counter>
            <Plus src={plusImg} onClick={increaseCount}></Plus>
          </CounterContainer>
          <AddToCart onClick={addToCart}>
            <AddToCartContainer>
              <CartImg src={cartImg}></CartImg>
              <AddToCartText>Add to Cart</AddToCartText>
            </AddToCartContainer>
          </AddToCart>
        </Cart>
      </ContentContaner>
      {cartCount > 0 && (
        <CartCounter onClick={() => openCart()}>{cartCount}</CartCounter>
      )}
      {cartisOpen && (
        <CartContentsContainer>
          <CartText>Cart</CartText>
          {cartCount === 0 ? (
            <EmptyCart>Your cart is empty</EmptyCart>
          ) : (
            <Checkout>
              <CheckoutData>
                <CheckoutThumbnail>
                  <FinalThumbnail src={thumbnailsArray[0]}></FinalThumbnail>
                </CheckoutThumbnail>
                <CheckoutCalculation>
                  <Item>Fall Limited Edition Sneakers</Item>
                  <Item>$125.00 x {cartCount}</Item>
                  <Data>${125 * cartCount}.00</Data>
                </CheckoutCalculation>
                <DeleteIcon
                  src={deleteicon}
                  onClick={() => setCartCount(0)}
                ></DeleteIcon>
              </CheckoutData>
              <CheckoutButtonContainer>
                <CheckoutButton>Checkout</CheckoutButton>
              </CheckoutButtonContainer>
            </Checkout>
          )}
        </CartContentsContainer>
      )}
    </PrimaryContainer>
  );
};

export default Exhibit;
