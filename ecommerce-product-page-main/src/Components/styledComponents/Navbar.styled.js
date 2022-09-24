import styled from 'styled-components';

//Navbar styling
export const StyledNavBar = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 550px) {
    min-height: 6rem;
  }
`;
//styling logo
export const Logo = styled.img`
  width: 8rem;
  margin-right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 1250px) {
    width: 7rem;
  }
  @media screen and (max-width: 1100px) {
    width: 6rem;
  }
  /* @media screen and (max-width: 950px) {
    width: 5rem;
  } */
`;
//styling unordered lists
export const LinksContainer = styled.ul`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1250px) {
    width: 50%;
  }
  @media screen and (max-width: 1100px) {
    width: 55%;
  }
  @media screen and (max-width: 950px) {
    width: 55%;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

//styling list items
export const Links = styled.li`
  list-style-type: none;
  cursor: pointer;
  font-family: 'Kumbh Sans', sans-serif;
  color: #6a6b6d;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border-bottom: 5px solid #dc7234;
    transition: all 0.2s linear;
  }
  /* @media screen and (max-width: 1250px) {
    width: 45%;
  } */
  @media screen and (max-width: 1100px) {
    font-size: 15px;
  }
  @media screen and (max-width: 950px) {
    font-size: 14px;
  }
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;
//styling cart icon
export const CartIcon = styled.img`
  width: 1.2rem;
  cursor: pointer;
  margin-right: auto;
  position: absolute;
  left: 90%;
  @media screen and (max-width: 1250px) {
    left: 85%;
  }
  @media screen and (max-width: 1100px) {
    left: 85%;
  }
  @media screen and (max-width: 950px) {
    left: 80%;
  }
  @media screen and (max-width: 1250px) {
    left: 82%;
  }
  @media screen and (max-width: 550px) {
    left: 75%;
  }
  @media screen and (max-width: 360px) {
    left: 70%;
  }
`;
//styling avatar
export const Avatar = styled.img`
  width: 2.8rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  &:hover {
    border: 2px solid #dc7234;
    border-radius: 100%;
  }
`;

export const HamburgerMenu = styled.img`
  width: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;
