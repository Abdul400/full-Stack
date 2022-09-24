import React from 'react';
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

const Explorer = ({ openGallery, closeGallery }) => {
  return (
    <>
      <ExplorerContainer onClick={() => closeGallery()}></ExplorerContainer>
      <GalleryContainer>
        <CloseGalleryContainer>
          <CloseGallery
            src={closeImg}
            onClick={() => closeGallery()}
          ></CloseGallery>
        </CloseGalleryContainer>
        <GalleryImageContainer>
          <PreviousContainer>
            <PreviousImg src={previousImg}></PreviousImg>
          </PreviousContainer>
          <NextContainer>
            <NextImg src={nextImg}></NextImg>
          </NextContainer>
          <GalleryImage src={mainPictureArray[0]}></GalleryImage>
        </GalleryImageContainer>
        <GalleryThumbnailContainer>
          {thumbnailsArray.map((thumbnail) => {
            return (
              <GalleryThumbnails>
                <ThumbnailsOverlay></ThumbnailsOverlay>
                <Thumbnails src={thumbnail}></Thumbnails>
              </GalleryThumbnails>
            );
          })}
        </GalleryThumbnailContainer>
      </GalleryContainer>
    </>
  );
};

export default Explorer;
