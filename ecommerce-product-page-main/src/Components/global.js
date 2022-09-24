import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body,
html {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media screen and (max-width: 550px) {
    align-items: flex-start;
    justify-content:center;
    min-height: 140vh;
  }
  /* @media screen and (min-width: 1024px) {
    align-items: flex-start;
    justify-content:center;
    min-height: 140vh;
  } */
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700;800;900&display=swap');

img{
  max-width: 100%;
}
#root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
   @media screen and (max-width:550px) {
    height: 100%;
    width: 100%;
  }
}
.App{
  min-height: 80%;
  width: 80%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 2px solid red;
   @media screen and (max-width:1250px) {
    width: 60rem;
  }
  @media screen and (max-width:1100px) {
    width: 50rem;
  }
  @media screen and (max-width:950px) {
    width: 40rem;
  }
  @media screen and (max-width:700px) {
    width: 35rem;
  }
  @media screen and (max-width:620px) {
    width: 32rem;
  } 
  @media screen and (max-width:550px) {
    height: 100%;
    width: 100%;
  }
}
`;
export default GlobalStyles;
