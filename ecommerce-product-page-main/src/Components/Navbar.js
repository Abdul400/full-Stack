import React from 'react';
import { useEffect, useState } from 'react';
import {
  StyledNavBar,
  Logo,
  LinksContainer,
  Links,
  CartIcon,
  Avatar,
  HamburgerMenu,
} from './styledComponents/Navbar.styled';
import logoSrc from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import hamburgericon from '../assets/images/icon-menu.svg';

const Navbar = ({ openMenu, openCart }) => {
  const [hamburgerMenuisVisible, setHamburgerMenuisVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 550) {
        setHamburgerMenuisVisible(true);
      } else {
        setHamburgerMenuisVisible(false);
      }
    });
    window.addEventListener('load', () => {
      if (window.innerWidth <= 550) {
        setHamburgerMenuisVisible(true);
      } else {
        setHamburgerMenuisVisible(false);
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (window.innerWidth <= 550) {
          setHamburgerMenuisVisible(true);
        } else {
          setHamburgerMenuisVisible(false);
        }
      });
      window.removeEventListener('load', () => {
        if (window.innerWidth <= 550) {
          setHamburgerMenuisVisible(true);
        } else {
          setHamburgerMenuisVisible(false);
        }
      });
    };
  }, []);

  return (
    <StyledNavBar>
      {hamburgerMenuisVisible && (
        <HamburgerMenu src={hamburgericon} onClick={() => openMenu()} />
      )}
      <Logo src={logoSrc} />
      {!hamburgerMenuisVisible && (
        <LinksContainer>
          <Links>Collections</Links>
          <Links>Men</Links>
          <Links>Women</Links>
          <Links>About</Links>
          <Links>Contact</Links>
        </LinksContainer>
      )}
      <CartIcon src={cart} onClick={() => openCart()}></CartIcon>
      <Avatar src={avatar}></Avatar>
    </StyledNavBar>
  );
};

export default Navbar;
