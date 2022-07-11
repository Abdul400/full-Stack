window.addEventListener('load', () => {
  myAllButton.click();
  console.log('all button clicked');
});
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
    myLists.innerHTML += `<div class="list-item" draggable="true">
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
    dragAndDrop();
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
        decreaseCount();
        let myElementPosition = myActiveTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        let myElementPosition1 = allMyTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        allMyTodos.splice(myElementPosition1, 1);
        myActiveTodos.splice(myElementPosition, 1);
      } else if (
        e.target.previousElementSibling.classList.contains('completed')
      ) {
        let myElementsPosition = myCompletedTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        let myElementsPosition1 = allMyTodos.indexOf(
          e.target.previousElementSibling.textContent
        );
        myCompletedTodos.splice(myElementsPosition, 1);
        allMyTodos.splice(myElementsPosition1, 1);
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
    myLists.innerHTML += `<div class="list-item" draggable="true">
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
    myLists.innerHTML += `<div class="list-item" draggable="true">
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
  console.log(allMyTodos);
  myInput.disabled = false;
  myLists.innerHTML = '';
  for (var i = 0; i < myActiveTodos.length; i++) {
    //populating the list on button press
    myLists.innerHTML += `<div class="list-item" draggable="true">
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
    myLists.innerHTML += `<div class="list-item" draggable="true">
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
  dragAndDrop();
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

//adding drag and drop functionality
let dragged;
let dropped;
function dragAndDrop() {
  let allDragLists = Array.from(document.getElementsByClassName('list-item'));
  console.log(allDragLists);
  allDragLists.forEach((dragItem) => {
    console.log('drag event');
    dragItem.addEventListener('dragstart', (e) => {
      dragged = e.target.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
      console.log(dragged);
      console.log(allMyTodos);
      console.log(allMyTodos.indexOf(dragged));
      return dragged;
    });
  });
  allDragLists.forEach((dropOverItem) => {
    dropOverItem.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  });
  allDragLists.forEach((dropTarget) => {
    dropTarget.addEventListener('drop', (e) => {
      let dragger = () => {
        console.log('testing');
        e.preventDefault;
        dropped = e.target.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
        console.log(dragged + ' has been dropped  on ' + dropped);
        return dropped;
      };
      dragger();
      positionCheck();
    });
  });
}

function positionCheck() {
  console.log('checking position');
  console.log(allMyTodos);
  console.log(allMyTodos.indexOf(dragged));
  console.log(allMyTodos.indexOf(dragged) + 1);
  if (allMyTodos.indexOf(dropped) + 1 == allMyTodos.length) {
    allMyTodos.splice(allMyTodos.indexOf(dragged), 1);
    console.log('dropping on last element');
    allMyTodos.push('Temporary');
    allMyTodos.splice(allMyTodos.indexOf(dropped) + 1, 0, dragged);
    console.log(allMyTodos);
    allMyTodos.pop();
    console.log(allMyTodos);
    myLists.innerHTML = '';
    for (var i = 0; i < allMyTodos.length; i++) {
      myLists.innerHTML += `<div class="list-item" draggable="true">
              <div class="checkbox"></div>
              <p>${allMyTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
    }
    dragAndDrop();
    strikeThrough();
    deleteListItem();
  } else if (allMyTodos.indexOf(dragged) + 1 == allMyTodos.indexOf(dropped)) {
    console.log('next to each other');
    allMyTodos.splice(allMyTodos.indexOf(dropped) + 1, 0, 'temporary');
    console.log(allMyTodos);
    allMyTodos.splice(allMyTodos.indexOf('temporary'), 0, dragged);
    allMyTodos.splice(allMyTodos.indexOf(dragged), 1);
    console.log(allMyTodos);
    let myNewestArray = allMyTodos.filter((item) => {
      return item != 'temporary';
    });
    allMyTodos = myNewestArray;
    console.log(allMyTodos);
    myLists.innerHTML = '';
    for (var i = 0; i < allMyTodos.length; i++) {
      myLists.innerHTML += `<div class="list-item" draggable="true">
              <div class="checkbox"></div>
              <p>${allMyTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
    }
    dragAndDrop();
    strikeThrough();
    deleteListItem();
  } else {
    allMyTodos.splice(allMyTodos.indexOf(dragged), 1);
    console.log('go ahead');
    allMyTodos.splice(allMyTodos.indexOf(dropped), 0, dragged);
    console.log(allMyTodos);
    myLists.innerHTML = '';
    for (var i = 0; i < allMyTodos.length; i++) {
      myLists.innerHTML += `<div class="list-item" draggable="true">
              <div class="checkbox"></div>
              <p>${allMyTodos[i]}</p>
              <img
                class="delete"
                src="images/icon-cross.svg"
                alt="delete item"
              />
              <hr />
            </div>`;
    }
    dragAndDrop();
    strikeThrough();
    deleteListItem();
  }
}
