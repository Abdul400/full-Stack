import React from 'react';
import {
  MobileMenuContainer,
  VerticalLinks,
  UnorderedList,
  CloseMenu,
  Overlay,
  MainContainer,
} from './styledComponents/MobileMenu.styled';
import closeIcon from '../assets/images/icon-close.svg';

const MobileMenu = ({ closeMobileMenu, showMobileMenu }) => {
  console.log(showMobileMenu);
  return (
    <>
      <MainContainer openAnimation={showMobileMenu}>
        <MobileMenuContainer openAnimation={showMobileMenu}>
          <CloseMenu
            src={closeIcon}
            onClick={() => {
              console.log(showMobileMenu);
              closeMobileMenu();
            }}
          />
          <UnorderedList showItems={showMobileMenu}>
            <VerticalLinks>Collections</VerticalLinks>
            <VerticalLinks>Men</VerticalLinks>
            <VerticalLinks>Women</VerticalLinks>
            <VerticalLinks>About</VerticalLinks>
            <VerticalLinks>Contact</VerticalLinks>
          </UnorderedList>
        </MobileMenuContainer>
      </MainContainer>
      <Overlay openAnimation={showMobileMenu} />
    </>
  );
};

export default MobileMenu;
