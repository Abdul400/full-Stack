import React, { useEffect, useState } from 'react';
import {
  ExplorerContainer,
  GalleryContainer,
  GalleryImageContainer,
  GalleryThumbnailContainer,
  CloseGalleryContainer,
  GalleryImage,
  GalleryThumbnails,
  Thumbnails,
  CloseGallery,
  PreviousContainer,
  PreviousImg,
  NextContainer,
  NextImg,
  ThumbnailsOverlay,
} from './styledComponents/Explorer.styled';
import { mainPictureArray, thumbnailsArray } from '../assets/images';
import closeImg from '../assets/images/icon-close.svg';
import previousImg from '../assets/images/icon-previous.svg';
import nextImg from '../assets/images/icon-next.svg';

const Explorer = ({ galleryArray, closeGallery, galleryCounter }) => {
  let [count, setCount] = useState(galleryCounter);
  let [myThumbnailsArray, setMyThumbnailsArray] = useState(galleryArray);

  function nextImage() {
    if (count >= 0 && count < mainPictureArray.length - 1) {
      setCount((prevCount) => prevCount + 1);
      let selectedThumbnail = myThumbnailsArray.map((item) => {
        if (myThumbnailsArray.indexOf(item) === count + 1) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
      setMyThumbnailsArray(selectedThumbnail);
    } else if (count === mainPictureArray.length - 1) {
      setCount(0);
      let selectedThumbnail = myThumbnailsArray.map((item) => {
        if (myThumbnailsArray.indexOf(item) === 0) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
      setMyThumbnailsArray(selectedThumbnail);
    }
  }

  function previousImage() {
    if (count <= mainPictureArray.length - 1 && count > 0) {
      setCount((prevCount) => prevCount - 1);
      let selectedThumbnail = myThumbnailsArray.map((item) => {
        if (myThumbnailsArray.indexOf(item) === count - 1) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
      setMyThumbnailsArray(selectedThumbnail);
    } else if (count === 0) {
      setCount(mainPictureArray.length - 1);
      let selectedThumbnail = myThumbnailsArray.map((item) => {
        if (myThumbnailsArray.indexOf(item) === 3) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
      setMyThumbnailsArray(selectedThumbnail);
    }
  }
  return (
    <>
      <ExplorerContainer onClick={() => closeGallery()}></ExplorerContainer>
      <GalleryContainer>
        <CloseGalleryContainer>
          <CloseGallery
            src={closeImg}
            onClick={() => closeGallery()}
            alt="close the viewer"
          ></CloseGallery>
        </CloseGalleryContainer>
        <GalleryImageContainer>
          <PreviousContainer onClick={() => previousImage()}>
            <PreviousImg
              src={previousImg}
              alt="go to previous image"
            ></PreviousImg>
          </PreviousContainer>
          <NextContainer onClick={() => nextImage()}>
            <NextImg src={nextImg} alt="go to next image"></NextImg>
          </NextContainer>
          <GalleryImage
            src={mainPictureArray[count]}
            alt="image of item"
          ></GalleryImage>
        </GalleryImageContainer>
        <GalleryThumbnailContainer>
          {myThumbnailsArray.map((item) => {
            let style = {
              opacity: item.selected ? '0.3' : '1',
            };
            let style1 = {
              outline: item.selected ? '2px solid #ff7d1b' : 'none',
            };
            function imgSrcFinder(e) {
              if (e.target.src === item.url) {
                let index = myThumbnailsArray.indexOf(item);
                setCount(index);
              }
              let myGalleryThumbnailsArray = myThumbnailsArray.map(
                (thumbnail) => {
                  if (e.target.src === thumbnail.url) {
                    return { ...thumbnail, selected: true };
                  } else {
                    return { ...thumbnail, selected: false };
                  }
                }
              );
              setMyThumbnailsArray(myGalleryThumbnailsArray);
            }
            return (
              <GalleryThumbnails style={style1}>
                <Thumbnails
                  style={style}
                  src={item.url}
                  onClick={(e) => imgSrcFinder(e)}
                  alt="thumbnail"
                ></Thumbnails>
                <ThumbnailsOverlay></ThumbnailsOverlay>
              </GalleryThumbnails>
            );
          })}
        </GalleryThumbnailContainer>
      </GalleryContainer>
    </>
  );
};

export default Explorer;
