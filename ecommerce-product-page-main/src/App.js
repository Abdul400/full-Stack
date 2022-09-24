import Navbar from './Components/Navbar';
import GlobalStyles from './Components/global';
import MobileMenu from './Components/MobileMenu';
import { useState, useEffect } from 'react';
import React from 'react';
import Exhibit from './Components/Exhibit';
import Explorer from './Components/Explorer';

function App() {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  let [cartisOpen, setCartisOpen] = useState(false);
  let [isMobile, setisMobile] = useState(false);
  let [showGallery, setShowGallery] = useState(false);

  function openMenu() {
    setShowMobileMenu(true);
  }
  function closeMobileMenu() {
    setShowMobileMenu(false);
  }

  function openCart() {
    setCartisOpen((prevState) => !prevState);
  }
  function openGallery() {
    console.log('testing');
    setShowGallery(true);
  }
  function closeGallery() {
    console.log('closing');
    setShowGallery(false);
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 550 && showMobileMenu) {
        setShowMobileMenu(false);
      } else if (window.innerWidth > 550) {
        setisMobile(false);
        console.log(isMobile);
      } else if (window.innerWidth < 550) {
        setisMobile(true);
        console.log(isMobile);
      } else if (window.innerWidth < 550 && showGallery) {
        setShowGallery(false);
      }
    });
    window.addEventListener('load', () => {
      if (window.innerWidth > 550) {
        setisMobile(false);
      } else {
        setisMobile(true);
      }
    });

    return () => {
      window.addEventListener('resize', () => {
        if (window.innerWidth > 550 && showMobileMenu) {
          setShowMobileMenu(false);
        } else if (window.innerWidth > 550) {
          setisMobile(false);
        } else if (window.innerWidth < 550) {
          setisMobile(true);
        } else if (window.innerWidth < 550 && showGallery) {
          setShowGallery(false);
        }
      });
      window.removeEventListener('load', () => {
        if (window.innerWidth > 550) {
          setisMobile(false);
        } else {
          setisMobile(true);
        }
      });
    };
  });

  return (
    <>
      {!isMobile && showGallery && <Explorer closeGallery={closeGallery} />}
      <MobileMenu
        closeMobileMenu={() => closeMobileMenu()}
        showMobileMenu={showMobileMenu}
      />
      <div className="App">
        <GlobalStyles showMobileMenu={showMobileMenu} />
        <Navbar openMenu={() => openMenu()} openCart={() => openCart()} />
        <Exhibit
          cartisOpen={cartisOpen}
          openCart={() => openCart()}
          isMobile={isMobile}
          openGallery={openGallery}
        />
      </div>
    </>
  );
}

export default App;
