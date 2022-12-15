import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../App.module.css';
import resultsStyle from '../styles/results.module.css';
import scissorsImage from '/images/icon-scissors.svg';
import { useLocation } from 'react-router-dom';

interface forwarded {
  setChosen: React.Dispatch<React.SetStateAction<string>>;
  chosen: string;
}

const Scissors = ({ setChosen, chosen }: forwarded) => {
  let navigate = useNavigate();
  let location = useLocation();

  function handleClick() {
    setChosen('scissors');
    setTimeout(() => navigate('/results'), 1000);
  }

  useEffect(() => {
    if (location.pathname === '/') {
      let selectScissors =
        document.getElementsByClassName('scissorsContainer')[0];

      selectScissors.addEventListener('click', () => {
        selectScissors.classList.add('shakeAnimate');
      });
    }

    if (location.pathname === '/results' && chosen === 'scissors') {
      let selectedItem = document.getElementsByClassName('resultsOption')[0];
      let computerSelection = document.getElementsByClassName('right')[0];
      let actualSelection = computerSelection.children[2];
      let playerShadowDiv = document.getElementsByClassName('player')[0];
      let computerShadowDiv =
        document.getElementsByClassName('computerPick')[0];

      selectedItem.classList.add('animate');
      actualSelection.classList.add('animate1');
      setTimeout(() => {
        selectedItem.classList.remove('animate');
        actualSelection.classList.remove('animate1');
      }, 2000);

      setTimeout(() => {
        let result = document.getElementsByClassName('result')[0];
        if (result.textContent === ' You Lose') {
          computerShadowDiv.classList.add('shadow');
        } else if (result.textContent === ' You Win') {
          playerShadowDiv.classList.add('shadow');
        }
      }, 2000);
    }
  }, [chosen]);

  function delayResults() {
    return setTimeout(() => {
      if (location.pathname !== '/results') {
        handleClick();
      }
    }, 1000);
  }

  return (
    <div
      className={
        location.pathname === '/results'
          ? 'scissorsResults resultsOption'
          : 'scissorsContainer option'
      }
      onClick={() => delayResults()}
    >
      <div
        className={
          location.pathname === '/results'
            ? 'resultsSelection'
            : 'selection scissors'
        }
      >
        <img
          src={scissorsImage}
          className={
            location.pathname === '/results' ? 'resultsImage' : 'normalImage'
          }
          alt="scissors"
        />
      </div>
    </div>
  );
};

export default Scissors;
