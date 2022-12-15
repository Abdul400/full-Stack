import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import spockImage from '/images/icon-spock.svg';

interface forwarded {
  setChosen: React.Dispatch<React.SetStateAction<string>>;
  chosen: string;
}

const Spock = ({ setChosen, chosen }: forwarded) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    setChosen('spock');
    setTimeout(() => navigate('/results'), 1000);
  }

  useEffect(() => {
    if (location.pathname === '/') {
      let selectSpock = document.getElementsByClassName('spock-container')[0];

      selectSpock.addEventListener('click', () => {
        selectSpock.classList.add('shakeAnimate');
      });
    }

    if (location.pathname === '/results' && chosen === 'spock') {
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
          ? 'spockResults resultsOption'
          : 'option spock-container'
      }
      onClick={() => delayResults()}
    >
      <div
        className={
          location.pathname === '/results'
            ? 'resultsSelection'
            : 'selection spock'
        }
      >
        <img
          src={spockImage}
          className={
            location.pathname === '/results' ? 'resultsImage' : 'normalImage'
          }
          alt="spock"
        />
      </div>
    </div>
  );
};

export default Spock;
