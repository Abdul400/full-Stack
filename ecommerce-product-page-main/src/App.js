import Navbar from './Components/Navbar';
import GlobalStyles from './Components/global';
import MobileMenu from './Components/MobileMenu';
import { useState, useEffect } from 'react';
import React from 'react';
import Exhibit from './Components/Exhibit';
import Explorer from './Components/Explorer';
import About from './pages/About';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import Men from './pages/Men';
import Women from './pages/Women';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  let [cartisOpen, setCartisOpen] = useState(false);
  let [isMobile, setisMobile] = useState(false);
  let [showGallery, setShowGallery] = useState(false);
  let [galleryArray, setGalleryArray] = useState([]);
  let [galleryImage, setGalleryImage] = useState(0);

  function openMenu() {
    setShowMobileMenu(true);
  }
  function closeMobileMenu() {
    setShowMobileMenu(false);
  }

  function openCart() {
    setCartisOpen((prevState) => !prevState);
  }
  function openGallery(e, exhibitImage, thumbnailArray) {
    setGalleryImage(exhibitImage);
    setGalleryArray(thumbnailArray);
    setShowGallery(true);
  }
  function closeGallery() {
    setShowGallery(false);
  }
  useEffect(() => {
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
    <React.Fragment>
      <Router>
        {!isMobile && showGallery && (
          <Explorer
            galleryCounter={galleryImage}
            galleryArray={galleryArray}
            closeGallery={closeGallery}
          />
        )}
        <MobileMenu
          closeMobileMenu={() => closeMobileMenu()}
          showMobileMenu={showMobileMenu}
        />
        <div className="App">
          <GlobalStyles showMobileMenu={showMobileMenu} />
          <Navbar openMenu={() => openMenu()} openCart={() => openCart()} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Exhibit
                  cartisOpen={cartisOpen}
                  openCart={() => openCart()}
                  isMobile={isMobile}
                  openGallery={openGallery}
                />
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/collections" element={<Collections />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/men" element={<Men />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
