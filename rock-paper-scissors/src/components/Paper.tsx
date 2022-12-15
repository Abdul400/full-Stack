import React, { useState, useEffect } from 'react';
import scissorsImage from '/images/icon-scissors.svg';
import '../styles/results.css';
import '../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import paperImage from '/images/icon-paper.svg';

interface forwarded {
  setChosen: React.Dispatch<React.SetStateAction<string>>;
  chosen: string;
}

const Paper = ({ setChosen, chosen }: forwarded) => {
  const navigate = useNavigate();
  const location = useLocation();
  function handleClick() {
    setChosen('paper');
    setTimeout(() => navigate('/results'), 1000);
  }

  useEffect(() => {
    if (location.pathname === '/') {
      let selectPaper = document.getElementsByClassName('paper-container')[0];

      selectPaper.addEventListener('click', () => {
        selectPaper.classList.add('shakeAnimate');
      });
    }

    if (location.pathname === '/results' && chosen === 'paper') {
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
          ? 'paperResults resultsOption'
          : 'option paper-container'
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
          src={paperImage}
          className={
            location.pathname === '/results' ? 'resultsImage' : 'normalImage'
          }
          alt="paper"
        />
      </div>
    </div>
  );
};

export default Paper;
