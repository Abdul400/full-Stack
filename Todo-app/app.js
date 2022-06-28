//changing themes
//declaration of variables
let changeThemeButton = document.getElementById('switch-icons'),
  cssTheme = document.getElementById('myCss'),
  body = document.getElementsByTagName('body')[0];

let binary = 0;

//adding event listener to the button/image
changeThemeButton.addEventListener('click', () => {
  if (binary == 0) {
    DarkTheme();
  } else if (binary == 1) {
    LightTheme();
  }
});

//dark theme
function DarkTheme() {
  changeThemeButton.src = 'images/icon-sun.svg';
  //input color
  myInput.style.color = '#b3b5cd';
  changeThemeButton.classList.add('animate__animated', 'animate__rotateIn'); //adding animations
  setTimeout(() => {
    changeThemeButton.classList.remove(
      'animate__animated',
      'animate__rotateIn'
    );
  }, 1000); //removing animations
  cssTheme.href = 'Dark-theme.css';
  binary = 1;
}

//light theme
function LightTheme() {
  changeThemeButton.src = 'images/icon-moon.svg';
  changeThemeButton.classList.add('animate__animated', 'animate__rotateIn'); //adding animations
  setTimeout(() => {
    changeThemeButton.classList.remove(
      'animate__animated',
      'animate__rotateIn'
    );
  }, 1000); //removing animations
  cssTheme.href = 'Light-theme.css';
  binary = 0;
}

let myCompletedTodos = [];
let allMyTodos = [];
let myActiveTodos = [];

//adding a new todo
let myInput = document.getElementById('input'),
  myLists = document.getElementsByClassName('lists')[0];

//adding eventlistener to input field
myInput.addEventListener('keyup', (e) => {
  if (e.key == 'Enter' && myInput.value != '') {
    myLists.innerHTML += `<div class="list-item">
              <div class="checkbox"></div>
              <p>${myInput.value}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
    allMyTodos.push(myInput.value);
    console.log(allMyTodos);
    myInput.value = '';

    strikeThrough(); //calling strikethrough function
    deleteListItem(); //calling deleteListItem function
    deleteListItem(); //calling deleteListItem function
  }
});

function strikeThrough() {
  //adding checkbox functionality
  let myCheckbox = Array.from(document.getElementsByClassName('checkbox'));
  console.log(myCheckbox);
  //adding event listener to each checkbox
  myCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      console.log('checking');
      console.log(e.target);
      e.target.style.backgroundImage = 'url("images/checkmark.png")';
      e.target.style.backgroundSize = 'cover';
      e.target.nextElementSibling.style.textDecoration = 'line-through';
      myCompletedTodos.push(e.target.nextElementSibling.textContent);
      console.log(myCompletedTodos);
    });
  });
}

function deleteListItem() {
  let myDeleteButton = Array.from(document.getElementsByClassName('delete'));
  //adding eventlistener to the delete button
  myDeleteButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
  });
}
