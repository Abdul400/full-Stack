import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function QuizPage(props) {
  //creating custom array (has objects) from the raw data
  let answersArray = props.data.map((item) => ({
    question: item.question,
    answers: [item.correct_answer, ...item.incorrect_answers],
    correct_answer: item.correct_answer,
  }));

  //reorganizing the array
  let organizedAnswers = answersArray.map((item) => {
    return {
      ...item,
      answers: item.answers
        .sort(() => Math.random() - 0.5)
        .map((answer) => ({
          value: answer,
          isSelected: false,
        })),
    };
  });

  console.log(organizedAnswers);

  //defininig state i.e teh array that is to be tracked
  let [finalArray, setFinalArray] = useState(organizedAnswers);

  //function for selecting different answer
  function selectAnswer(event, item, answer) {
    setFinalArray((prevArray) => {
      let finalArrayItemState = prevArray.map((arrayItems) => ({
        ...arrayItems,
        answers: arrayItems.answers.map((option) => {
          console.log(option);
          if (option === answer) {
            return { ...option, isSelected: !option.isSelected };
          } else {
            return option;
          }
        }),
      }));
      console.log(finalArray);
      return finalArrayItemState;
    });
  }

  let renderedElements = finalArray.map((item) => {
    return (
      <div className="question-container">
        <div className="question">
          <h3>{item.question}</h3>
        </div>
        <div className="answers">
          {item.answers.map((answer) => {
            let styles = {
              backgroundColor: answer.isSelected ? '#D6DBF5' : 'white',
              border: answer.isSelected ? 'none' : '',
            };
            return (
              <button
                className="answer"
                onClick={(event) => selectAnswer(event, item, answer)}
                style={styles}
              >
                {answer.value}
              </button>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="quizpage--container">
      {renderedElements}
      <button className="check">Check Answers</button>
    </div>
  );
}
