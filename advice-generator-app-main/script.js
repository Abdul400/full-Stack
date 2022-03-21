//saving the api url as a variable to access via fetch api
const apiUrl = 'https://api.adviceslip.com/advice';

//initializing fetch api
fetch(apiUrl)
  .then((response) => response.json()) //getting response and converting it into json object
  .then((slip) => {
    generateHtml(slip.slip); //callback function for generating html
  })
  .catch((error) => console.log('error' + error));

//call back function for generating Html and assigning object values to respective to the html code
const generateHtml = (adviceData) => {
  const Html = `<p class="advice-number animate__animated animate__bounce">ADVICE #${adviceData.id}</p>
        <h1 class="advice animate__animated animate__backInDown">
          ${adviceData.advice}
        </h1>
        <img class="divider" src="/images/pattern-divider-desktop.svg" alt="get random advice by clicking" />
        <button class="button animate__animated animate__rubberBand">
          <img class="dice" src="/images/icon-dice.svg" alt="" />
        </button>
        `;
  const container = document.querySelector('.container'); //selecting the container to assign the Hml later
  container.innerHTML = Html; //injecting html code to innerHtml of container

  //refresh button on press
  //selecting button
  const myButton = document.querySelector('.button');
  //adding eventlistener to the button
  myButton.addEventListener('click', () => {
    window.location.reload();
  });
};
