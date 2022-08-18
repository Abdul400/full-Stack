import React, { useState } from 'react';
import '../App.css';
import { nanoid } from 'nanoid';

export default function FirstPage(props) {
  let [hasNotChosen, setHasNotChosen] = useState(true);

  let obtainedCategoriesArray = props.categories.trivia_categories;
  let categoriesArray = obtainedCategoriesArray.map(
    (category) => category.name
  );
  let categoriesId = obtainedCategoriesArray.map((category) => category.id);
  let renderedCategories = categoriesArray.map((category) => {
    return <option value={category}>{category}</option>;
  });

  let [finalSelected, setFinalSelected] = useState(0);
  function chosenCategory(event) {
    let selectedItem = event.currentTarget.value;
    let index = categoriesArray.indexOf(selectedItem);
    setFinalSelected(categoriesId[index]);
    if (selectedItem != 'select') {
      setHasNotChosen(false);
    } else if (selectedItem === 'select') {
      setHasNotChosen(true);
    }
  }

  let styles = {
    opacity: hasNotChosen ? '50%' : '100%',
  };
  return (
    <div className="firstPageContainer">
      <h2 className="header">Quizzical</h2>
      <p className="description">Press Start to Begin Quiz</p>
      <label htmlFor="selection" className="selectText">
        Select A Category
      </label>
      <select
        name="selection"
        id="selection"
        onChange={(event) => chosenCategory(event)}
      >
        <option value="select">Select Item---</option>
        {renderedCategories}
      </select>
      <button
        className="startButton"
        onClick={(event) => props.func(finalSelected)}
        disabled={hasNotChosen}
        style={styles}
      >
        Start Quiz
      </button>
    </div>
  );
}
