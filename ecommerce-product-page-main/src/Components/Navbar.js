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
import { Link } from 'react-router-dom';

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
      <Link to={'/'}>
        <Logo src={logoSrc} />
      </Link>

      {!hamburgerMenuisVisible && (
        <LinksContainer>
          <Links>
            <Link to={'/collections'}>Collections</Link>
          </Links>
          <Links>
            <Link to={'/men'}>Men</Link>
          </Links>
          <Links>
            <Link to={'/women'}>Women</Link>
          </Links>
          <Links>
            <Link to={'/about'}>About</Link>
          </Links>
          <Links>
            <Link to={'/contact'}>Contact</Link>
          </Links>
        </LinksContainer>
      )}
      <CartIcon src={cart} onClick={() => openCart()}></CartIcon>
      <Link to={'/profile'}>
        <Avatar src={avatar}></Avatar>
      </Link>
    </StyledNavBar>
  );
};

export default Navbar;
