import React, { useEffect, useState, useMemo } from 'react';
import Score from '../components/Score';
import '../styles/results.css';
import Scissors from '../components/Scissors';
import Rock from '../components/Rock';
import Paper from '../components/Paper';
import Spock from '../components/Spock';
import Lizard from '../components/Lizard';
import { useLocation, useNavigate } from 'react-router-dom';

interface forwarded {
  chosen: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setChosen: React.Dispatch<React.SetStateAction<string>>;
}

const Results = ({ chosen, count, setCount, setChosen }: forwarded) => {
  const [reveal, setReveal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [output, setOutPut] = useState('');
  //const [computerChoice, setComputerChoice] = useState('');

  function showChosen() {
    if (chosen === 'scissors') {
      return <Scissors chosen={chosen} setChosen={setChosen} />;
    } else if (chosen === 'rock') {
      return <Rock chosen={chosen} setChosen={setChosen} />;
    } else if (chosen === 'paper') {
      return <Paper chosen={chosen} setChosen={setChosen} />;
    } else if (chosen === 'spock') {
      return <Spock chosen={chosen} setChosen={setChosen} />;
    } else if (chosen === 'lizard') {
      return <Lizard chosen={chosen} setChosen={setChosen} />;
    }
  }

  const computerChoice = useMemo(() => {
    //choose a random option for the computer
    let myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let myNumber = Math.floor(Math.random() * 5);
    return myArray[myNumber];
  }, [chosen]);

  // useEffect(() => {
  //   //choose a random option for the computer
  //   let myTuple: [string, string, string, string, string];
  //   myTuple = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  //   let myNumber = Math.floor(Math.random() * 5);
  //   setComputerChoice(myTuple[myNumber]);
  // }, [chosen]);

  useEffect(() => {
    console.log(computerChoice);
    //determine game outcome
    if (chosen === computerChoice) {
      setOutPut('Drew');
    } else if (chosen === 'scissors') {
      if (computerChoice === 'spock' || computerChoice === 'rock') {
        setOutPut('Lose');
      } else {
        setOutPut('Win');
      }
    } else if (chosen === 'paper') {
      if (computerChoice === 'scissors' || computerChoice === 'lizard') {
        setOutPut('Lose');
      } else {
        setOutPut('Win');
      }
    } else if (chosen === 'rock') {
      if (computerChoice === 'paper' || computerChoice === 'spock') {
        setOutPut('Lose');
      } else {
        setOutPut('Win');
      }
    } else if (chosen === 'lizard') {
      if (computerChoice === 'rock' || computerChoice === 'scissors') {
        setOutPut('Lose');
      } else {
        setOutPut('Win');
      }
    } else if (chosen === 'spock') {
      if (computerChoice === 'lizard' || computerChoice === 'paper') {
        setOutPut('Lose');
      } else {
        setOutPut('Win');
      }
    }
  }, [chosen, computerChoice]);

  useEffect(() => {
    //update the score
    function updateScores() {
      console.log(output);
      if (output === 'Win') {
        console.log('win');
        setCount((prevCount: number) => prevCount + 1);
      } else if (output === 'Lose') {
        console.log('lose');
        setCount((prevCount: number) => prevCount - 1);
      }
      setShow(true);
    }
    //delay results
    setTimeout(() => updateScores(), 1500);
  }, [output]);
  // useEffect(() => {
  //   console.log('helloo');
  //   console.log(computerChoice);
  //   if (chosen === computerChoice) {
  //     setOutPut('Draw');
  //   } else if (chosen === 'scissors') {
  //     if (computerChoice === 'spock' || computerChoice === 'rock') {
  //       setOutPut('Lose');
  //     } else {
  //       setOutPut('Win');
  //     }
  //   } else if (chosen === 'paper') {
  //     if (computerChoice === 'scissors' || computerChoice === 'lizard') {
  //       setOutPut('Lose');
  //     } else {
  //       setOutPut('Win');
  //     }
  //   } else if (chosen === 'rock') {
  //     if (computerChoice === 'paper' || computerChoice === 'spock') {
  //       setOutPut('Lose');
  //     } else {
  //       setOutPut('Win');
  //     }
  //   } else if (chosen === 'lizard') {
  //     if (computerChoice === 'rock' || computerChoice === 'scissors') {
  //       setOutPut('Lose');
  //     } else {
  //       setOutPut('Win');
  //     }
  //   } else if (chosen === 'spock') {
  //     if (computerChoice === 'lizard' || computerChoice === 'paper') {
  //       setOutPut('Lose');
  //     } else {
  //       setOutPut('Win');
  //     }
  //   }
  // }, [computerChoice]);

  // useEffect(() => {
  //   console.log(output);
  //   if (output === 'Win') {
  //     setCount((prevCount: number) => prevCount + 1);
  //   } else if (output === 'Lose') {
  //     setCount((prevCount: number) => prevCount - 1);
  //   }
  // }, [output]);

  //computer selection logic
  function computerSelect() {
    if (computerChoice === 'scissors') {
      return <Scissors chosen={chosen} setChosen={setChosen} />;
    } else if (computerChoice === 'rock') {
      return <Rock chosen={chosen} setChosen={setChosen} />;
    } else if (computerChoice === 'paper') {
      return <Paper chosen={chosen} setChosen={setChosen} />;
    } else if (computerChoice === 'spock') {
      return <Spock chosen={chosen} setChosen={setChosen} />;
    } else if (computerChoice === 'lizard') {
      return <Lizard chosen={chosen} setChosen={setChosen} />;
    }
    //
  }

  // useEffect(() => {
  //   //delay the results
  //   setTimeout(() => setShow(true), 1500);
  // }, [output]);

  //restart the game
  function restart() {
    setChosen('');
    setShow(false);
    navigate('/');
  }

  return (
    <div className="result-page">
      {reveal && <div className="overlay"></div>}
      {reveal && (
        <div className="rules-image">
          <h2 className="rules-rules">rules</h2>
          <img
            className="main-rules"
            src="/images/image-rules-bonus.svg"
            alt="rules image"
          />
          <img
            className="close"
            src="/images/icon-close.svg"
            alt="close"
            onClick={() => setReveal(false)}
          />
        </div>
      )}
      <div className="top-results">
        <Score count={count} />
      </div>
      <div className="bottom-results">
        <div className="left">
          <h2 className="playerPick">You picked</h2>
          <div className="player"></div>
          {showChosen()}
        </div>
        {show && (
          <div className="middle-results">
            <h2 className="result">{` You ${output}`}</h2>
            <button className="replay" onClick={() => restart()}>
              Play Again
            </button>
          </div>
        )}
        <div className="right">
          <h2 className="computer">The house Picked</h2>
          <div className="computerPick"></div>
          {computerSelect()}
        </div>
      </div>
      <div className="rules-container" onClick={() => setReveal(!reveal)}>
        <h2 className="rules">rules</h2>
      </div>
    </div>
  );
};

export default Results;
