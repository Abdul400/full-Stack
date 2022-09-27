import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  height: 100%;
  width: ${({ openAnimation }) => {
    console.log(openAnimation);
    return openAnimation ? '50%' : '0%';
  }};
  position: absolute;
  top: 0;
  background-color: white;
  z-index: 5;
  color: black;
  transition: width 0.5s linear;
`;
export const UnorderedList = styled.ul`
  list-style-type: style type none;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  top: 5rem;
  display: ${({ showItems }) => (!showItems ? 'none' : '')};
  transition: display 0.5s ease-in-out;
`;
export const VerticalLinks = styled.li`
  padding-left: 1.5rem;
  color: black;
  z-index: 10;
  list-style-type: none;
  cursor: pointer;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
export const CloseMenu = styled.img`
  width: 0.9rem;
  position: relative;
  margin-left: 1.4rem;
  top: 2.6rem;
  cursor: pointer;
`;
export const Overlay = styled.div`
  width: ${({ openAnimation }) => {
    console.log(openAnimation);
    return openAnimation ? '100%' : '0%';
  }};
  height: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: 5;
  position: absolute;
`;
export const MainContainer = styled.div`
  width: ${({ openAnimation }) => {
    console.log(openAnimation);
    return openAnimation ? '100%' : '0%';
  }};
  min-height: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.5s ease-in-out;
`;
