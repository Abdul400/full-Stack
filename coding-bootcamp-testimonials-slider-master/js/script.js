//declaration of variables
let i = 0,
  j = 0,
  k = 0,
  l = 0,
  myTestimonyArray = [],
  myNameArray = [],
  myPositionArray = [],
  myPicsArray = [],
  previousButton = document.getElementById('prev'),
  nextButton = document.getElementById('next');

//container variables
let testimonyContainer = document.getElementById('testimony'),
  nameContainer = document.getElementById('name'),
  positionContainer = document.getElementById('position'),
  picContainer = document.getElementById('pic');
console.log(nameContainer);
//assigning array indexes for testimony
myTestimonyArray[0] =
  '"If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."';
myTestimonyArray[1] =
  "\"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.\"";

//assigning array indexes for Names
myNameArray[0] = 'John Tarkpor';
myNameArray[1] = 'Tanya Sinclair';

//assigning array indexes for positions
myPositionArray[0] = 'Front-end Developer';
myPositionArray[1] = 'UX Engineer';

//assigning array indexes for images
myPicsArray[0] = '/images/image-john.jpg';
myPicsArray[1] = '/images/image-tanya.jpg';

//default profile that loads when the page first loads
window.onload = () => {
  testimonyContainer.innerText = myTestimonyArray[0];
  nameContainer.innerText = myNameArray[0];
  positionContainer.innerHTML = myPositionArray[0];
  picContainer.src = myPicsArray[0];
};

//Testimony
//function for going forwards
function nextTestimony() {
  if (i < myTestimonyArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
  testimonyContainer.textContent = myTestimonyArray[i];
  testimonyContainer.classList.add('animate__animated', 'animate__fadeInLeft');
  setTimeout(() => {
    testimonyContainer.classList.remove(
      'animate__animated',
      'animate__fadeInLeft'
    );
  }, 1000);
}
//function for going backwards
function previousTestimony() {
  if (i > 0) {
    i--;
  } else {
    i = myTestimonyArray.length - 1;
  }
  testimonyContainer.textContent = myTestimonyArray[i];
  testimonyContainer.classList.add('animate__animated', 'animate__fadeInLeft');
  setTimeout(() => {
    testimonyContainer.classList.remove(
      'animate__animated',
      'animate__fadeInLeft'
    );
  }, 1000);
}

//Names
//function for going forwards
function nextName() {
  if (j < myNameArray.length - 1) {
    j++;
  } else {
    j = 0;
  }
  nameContainer.textContent = myNameArray[j];
  nameContainer.classList.add('animate__animated', 'animate__bounce');
  setTimeout(() => {
    nameContainer.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
}
//function for going backwards
function previousName() {
  if (j > 0) {
    j--;
  } else {
    j = myNameArray.length - 1;
  }
  nameContainer.textContent = myNameArray[j];
  nameContainer.classList.add('animate__animated', 'animate__bounce');
  setTimeout(() => {
    nameContainer.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
}

//positions
//function for going forwards
function nextPosition() {
  if (k < myPositionArray.length - 1) {
    k++;
  } else {
    k = 0;
  }
  positionContainer.textContent = myPositionArray[k];
  positionContainer.classList.add('animate__animated', 'animate__bounce');
  setTimeout(() => {
    positionContainer.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
}
//function for going backwards
function previousPosition() {
  if (k > 0) {
    k--;
  } else {
    k = myPositionArray.length - 1;
  }
  positionContainer.textContent = myPositionArray[k];
  positionContainer.classList.add('animate__animated', 'animate__bounce');
  setTimeout(() => {
    positionContainer.classList.remove('animate__animated', 'animate__bounce');
  }, 1000);
}

//images
//function for going forwards
function nextImage() {
  if (l < myPicsArray.length - 1) {
    l++;
  } else {
    l = 0;
  }
  picContainer.src = myPicsArray[l];
  picContainer.classList.add('animate__animated', 'animate__fadeIn');
  setTimeout(() => {
    picContainer.classList.remove('animate__animated', 'animate__fadeIn');
  }, 1000);
}
//function for going backwards
function previousImage() {
  if (l > 0) {
    l--;
  } else {
    l = myPicsArray.length - 1;
  }
  picContainer.src = myPicsArray[l];
  picContainer.classList.add('animate__animated', 'animate__fadeIn');
  setTimeout(() => {
    picContainer.classList.remove('animate__animated', 'animate__fadeIn');
  }, 1000);
}

//adding eventlistener to the next button
nextButton.addEventListener('click', () => {
  console.log('clicked');
  nextTestimony();
  nextName();
  nextPosition();
  nextImage();
});

//adding eventlistener for previous button
previousButton.addEventListener('click', () => {
  previousTestimony();
  previousName();
  previousPosition();
  previousImage();
});
