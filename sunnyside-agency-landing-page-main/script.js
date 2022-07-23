//definition of variables
let myNavigation = document.getElementsByClassName('top-section')[0];
let myNav = document.getElementsByClassName('nav')[0];

//adding hamburger and making nav invisible if width < 600px
if (window.innerWidth <= 600) {
  //making nav invisible
  myNav.classList.add('invisible');

  //creating harmburger element
  let myNode = document.createElement('img');
  myNavigation.appendChild(myNode);
  myNode.src = '/images/icon-hamburger.svg';
  myNode.classList.add('positioner'); //styling hamburger

  //grabbing hamburger element
  let myHamburger = document.getElementsByClassName('positioner')[0];
  //adding event listener to the hamburger menu
  myHamburger.addEventListener('click', () => {
    if (myNav.classList.contains('visible')) {
      myNav.classList.remove('visible');
      myNav.classList.add('invisible');
    } else {
      myNav.classList.add('visible');
      myNav.classList.remove('invisible');
    }
  });
}

//event listener for window resizing
window.addEventListener('resize', () => {
  //grabbing hamburger element
  let myImage = document.getElementsByClassName('positioner')[0];

  //condition if mobile and harmburger menu not present
  if (window.innerWidth <= 600 && !myImage) {
    //creating hurmburger menu
    let myNode = document.createElement('img');
    myNavigation.appendChild(myNode);
    myNode.src = '/images/icon-hamburger.svg';
    myNode.classList.add('positioner'); //adding styling to hamburger
    myNav.classList.add('invisible'); //making nav invisible

    //grabbing hamburger
    let myHamburger = document.getElementsByClassName('positioner')[0];
    //adding event listener to hamburger when in mobile and resizing
    myHamburger.addEventListener('click', () => {
      myNav.classList.toggle('invisible');
    });
  } else if (window.innerWidth > 600 && myImage) {
    //condition when resizing screen and screen size is greater than 600px
    myNav.classList.remove('invisible'); //making nav visible
    //   myNav.style.display = 'flex';
    myNavigation.removeChild(myImage); //removing hamburger menu
  }
});
