import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  DominoSpinner,
  PongSpinner,
  SwapSpinner,
  TraceSpinner,
} from 'react-spinners-kit';
import Confetti from 'react-confetti';
import { nanoid } from 'nanoid';

export default function QuizPage(props) {
  let [answersArrays, setAnswersArrays] = useState([]);
  let [showAnswers, setShowAnswers] = useState(false);
  let [newQuestion, setnewQuestion] = useState(false);
  let [buttonDisable, setbuttonDisable] = useState(false);
  let [finalArray, setFinalArray] = useState([]);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&category=${props.category}`
    )
      .then((res) => res.json())
      .then((data) => setAnswersArrays(data.results))
      .catch((err) => console.error(err));
  }, [newQuestion]);

  //creating custom array (has objects) from the raw data
  let answersArray = answersArrays.map((item) => ({
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

  //defininig state i.e the array that is to be tracked
  useEffect(() => {
    setFinalArray(organizedAnswers);
    setCount(0);
    setLoading(false);
  }, [answersArrays]);

  //function for selecting different answer
  function selectAnswer(event, item, answer) {
    setFinalArray((prevArray) => {
      let finalArrayItemState = prevArray.map((arrayItems) => ({
        ...arrayItems,
        answers: arrayItems.answers.map((option) => {
          if (option === answer) {
            return { ...option, isSelected: true };
          } else if (option != answer && item.answers.includes(option)) {
            return { ...option, isSelected: false };
          } else {
            return option;
          }
        }),
      }));
      return finalArrayItemState;
    });
  }

  function showAllAnswers() {
    if (showAnswers) {
      setShowAnswers(false);
      setbuttonDisable(false);
      setnewQuestion((prevItem) => !prevItem);
    } else {
      setShowAnswers(true);
      setbuttonDisable(true);
    }

    let correctAnswers = finalArray.map((question) => {
      return question.correct_answer;
    });
    let selectedAnswers = [];
    for (let i = 0; i < finalArray.length; i++) {
      for (let j = 0; j < finalArray[i].answers.length; j++) {
        if (finalArray[i].answers[j].isSelected) {
          selectedAnswers.push(finalArray[i].answers[j].value);
        }
      }
    }

    let counter = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      for (let j = 0; j < selectedAnswers.length; j++) {
        if (correctAnswers[i] === selectedAnswers[j]) {
          counter++;
        }
      }
    }
    setCount(counter);
  }

  let renderedElements = finalArray.map((item) => {
    return (
      <div className="question-container">
        <div className="question">
          <h3 key={nanoid()}>{item.question}</h3>
        </div>
        <div className="answers">
          {item.answers.map((answer) => {
            let correctAnswers = finalArray.map((question) => {
              return question.correct_answer;
            });
            function changeBackgroundColor() {
              if (answer.isSelected === true) {
                if (showAnswers && correctAnswers.includes(answer.value)) {
                  return '#94D7A2';
                } else if (
                  showAnswers &&
                  !correctAnswers.includes(answer.value)
                ) {
                  return '#cf6969';
                } else {
                  return '#c3c7d9';
                }
              } else if (showAnswers && correctAnswers.includes(answer.value)) {
                return '#94D7A2';
              }
            }
            function changeBorder() {
              if (answer.isSelected === true) {
                return 'none';
              } else if (showAnswers) {
                let border;
                let correctAnswers = finalArray.map((question) => {
                  return question.correct_answer;
                });
                if (correctAnswers.includes(answer.value)) {
                  border = 'none';
                  return border;
                }
                return border;
              }
            }
            function changeOpacity() {
              if (showAnswers) {
                if (correctAnswers.includes(answer.value)) {
                  return '1';
                } else {
                  return '0.5';
                }
              }
            }
            let styles = {
              backgroundColor: changeBackgroundColor(),
              border: changeBorder(),
              opacity: changeOpacity(),
            };
            return (
              <button
                className="answer"
                onClick={(event) => selectAnswer(event, item, answer)}
                style={styles}
                disabled={buttonDisable}
                key={nanoid()}
              >
                {answer.value}
              </button>
            );
          })}
        </div>
      </div>
    );
  });
  function restart() {
    location.reload();
  }
  return loading ? (
    <div className="animation_container">
      <PongSpinner
        className="loading"
        size={70}
        color="#686769"
        loading={true}
      />
    </div>
  ) : (
    <div className="quizpage--container">
      {count === 5 && (
        <Confetti
          width={window.innerWidth}
          height={
            window.innerWidth < 600
              ? window.innerHeight * 1.6
              : window.innerHeight
          }
        />
      )}
      {renderedElements}
      <div className="control-buttons">
        {showAnswers && (
          <h4 className="results">You scored {count}/5 correct answers</h4>
        )}
        <button className="check" onClick={showAllAnswers}>
          {showAnswers ? 'Play Again' : 'Show Answers'}
        </button>
        {showAnswers && (
          <button className="restart" onClick={restart}>
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
