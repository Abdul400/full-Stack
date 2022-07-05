//changing themes
//declaration of variables
let changeThemeButton = document.getElementById('switch-icons'),
  cssTheme = document.getElementById('myCss'),
  body = document.getElementsByTagName('body')[0],
  counter = 0;

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
let showAllTodos = [];

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
    myActiveTodos = allMyTodos.filter((x) => !myCompletedTodos.includes(x));
    myInput.value = '';
    strikeThrough(); //calling strikethrough function
    deleteListItem(); //calling deleteListItem function
    addCount();
  }
});

function strikeThrough() {
  //adding checkbox functionality
  let myCheckbox = Array.from(document.getElementsByClassName('checkbox'));
  //adding event listener to each checkbox
  myCheckbox.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      e.target.style.backgroundImage = 'url("images/checkmark.png")';
      e.target.style.backgroundSize = 'cover';
      e.target.nextElementSibling.classList.add('completed');
      // e.target.style.backgroundImage = 'url("images/checkmark.png")';
      // e.target.style.backgroundSize = 'cover';
      // e.target.nextElementSibling.style.textDecoration = 'line-through';
      myCompletedTodos.push(e.target.nextElementSibling.textContent);
      myActiveTodos = allMyTodos.filter((value) => {
        return !myCompletedTodos.includes(value);
      });
      console.log(myActiveTodos);
      decreaseCount();
    });
  });
}

function deleteListItem() {
  let myDeleteButton = Array.from(document.getElementsByClassName('delete'));
  //adding eventlistener to the delete button
  myDeleteButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      if (!e.target.previousElementSibling.classList.contains('completed')) {
        console.log('item not completed');
        decreaseCount();
        let myElementPosition = myActiveTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        let myElementPosition1 = allMyTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        console.log(e.target.previousElementSibling.textContent);
        console.log(myElementPosition);
        console.log(myActiveTodos);
        console.log(allMyTodos);
        allMyTodos.splice(myElementPosition1, 1);
        myActiveTodos.splice(myElementPosition, 1);
        console.log(myActiveTodos);
        console.log(allMyTodos);
      } else if (
        e.target.previousElementSibling.classList.contains('completed')
      ) {
        console.log('item completed');
        let myElementsPosition = myCompletedTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        let myElementsPosition1 = allMyTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        console.log(e.target.previousElementSibling.textContent);
        console.log(myElementsPosition);
        console.log(myCompletedTodos);
        console.log(allMyTodos);
        myCompletedTodos.splice(myElementsPosition, 1);
        allMyTodos.splice(myElementsPosition1, 1);
        console.log(myCompletedTodos);
        console.log(allMyTodos);
      }
    });
  });
}

function resetTodos() {
  let allParagraphs = Array.from(document.querySelectorAll('p'));
  for (let i = 0; i < allParagraphs.length; i++) {
    if (allParagraphs[i].classList.contains('completed')) {
      allParagraphs[i].parentNode.remove();
    }
  }

  let mynewArray = allMyTodos.filter((item) => {
    return !myCompletedTodos.includes(item);
  });
  allMyTodos = mynewArray;
  myCompletedTodos = [];
}

//all,active, and complete button functions
let myAllButton = document.getElementById('all'),
  myActiveButton = document.getElementById('active'),
  myCompletedButton = document.getElementById('completed');

//adding event listener to the 'completed' button
myCompletedButton.addEventListener('click', () => {
  myInput.disabled = true;
  myLists.innerHTML = '';
  for (var i = 0; i < myCompletedTodos.length; i++) {
    //populating the list on button press
    myLists.innerHTML += `<div class="list-item">
              <div class="checkbox checked"></div>
              <p class="completed">${myCompletedTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
  }
  deleteListItem();
});

//adding event listener to the 'Active' button
myActiveButton.addEventListener('click', () => {
  myLists.innerHTML = '';
  for (var i = 0; i < myActiveTodos.length; i++) {
    //populating the list on button press
    myLists.innerHTML += `<div class="list-item">
              <div class="checkbox"></div>
              <p>${myActiveTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
  }
  myInput.disabled = true;
  deleteListItem();
  strikeThrough();
});

//adding event listener to the 'All' button
myAllButton.addEventListener('click', () => {
  myInput.disabled = false;
  myLists.innerHTML = '';
  for (var i = 0; i < myActiveTodos.length; i++) {
    //populating the list on button press
    myLists.innerHTML += `<div class="list-item">
              <div class="checkbox"></div>
              <p>${myActiveTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
  }
  for (var i = 0; i < myCompletedTodos.length; i++) {
    //populating the list on button press
    myLists.innerHTML += `<div class="list-item">
              <div class="checkbox checked"></div>
              <p class="completed">${myCompletedTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
  }
  strikeThrough();
  deleteListItem();
});

//clearing completed todos
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  resetTodos();
});

//adding counter for items left
let myCounter = document.getElementsByClassName('items-left')[0],
  count = 0;

function addCount() {
  count++;
  myCounter.textContent = count + ' items left';
}

function decreaseCount() {
  if (count > 0) {
    count--;
  }
  myCounter.textContent = count + ' items left';
}
