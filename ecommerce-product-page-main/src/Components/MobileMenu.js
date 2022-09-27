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
import { Link } from 'react-router-dom';

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
            <VerticalLinks
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <Link to={'/collections'}>Collections</Link>
            </VerticalLinks>
            <VerticalLinks
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <Link to={'/men'}>Men</Link>
            </VerticalLinks>
            <VerticalLinks
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <Link to={'/women'}>Women</Link>
            </VerticalLinks>
            <VerticalLinks
              onClick={() => {
                closeMobileMenu();
              }}
            >
              {' '}
              <Link to={'/about'}>About</Link>
            </VerticalLinks>
            <VerticalLinks
              onClick={() => {
                closeMobileMenu();
              }}
            >
              <Link to={'/contact'}>Contact</Link>
            </VerticalLinks>
          </UnorderedList>
        </MobileMenuContainer>
      </MainContainer>
      <Overlay openAnimation={showMobileMenu} />
    </>
  );
};

export default MobileMenu;
