import styled from 'styled-components';

export const ExplorerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.7;
  z-index: 100;
`;
export const GalleryContainer = styled.div`
  width: 28rem;
  height: 35rem;
  z-index: 120;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;
export const GalleryImageContainer = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 10px;
  overflow: hidden;
`;
export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const GalleryThumbnailContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const GalleryThumbnails = styled.div`
  width: 20%;
  height: 60%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:hover {
    outline: 2px solid #ff7d1b;
  }
`;
export const Thumbnails = styled.img`
  width: 100%;
  height: 100%;
`;
export const ThumbnailsOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
  opacity: 0;
  &:hover {
    opacity: 0.5;
  }
`;
export const CloseGalleryContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
export const CloseGallery = styled.img`
  width: 1.2em;
  cursor: pointer;
`;
export const PreviousContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -1.5rem;
  top: 35%;
  cursor: pointer;
`;
export const PreviousImg = styled.img``;
export const NextContainer = styled(PreviousContainer)`
  left: 94%;
  cursor: pointer;
`;
export const NextImg = styled(PreviousImg)``;
