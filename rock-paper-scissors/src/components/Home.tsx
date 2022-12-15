import React, { useState, useEffect } from 'react';
import Score from './Score';
import Scissors from './Scissors';
import Paper from './Paper';
import Rock from './Rock';
import Lizard from './Lizard';
import Spock from './Spock';
import '../App.css';

interface forwarded {
  chosen: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setChosen: React.Dispatch<React.SetStateAction<string>>;
}
const Home = ({ chosen, count, setCount, setChosen }: forwarded) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="home">
      {show && <div className="overlay"></div>}
      {show && (
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
            onClick={() => setShow(false)}
          />
        </div>
      )}
      <div className="primary-container">
        <div className="top-section">
          <Score count={count} />
        </div>
        <div className="bottom-section">
          <img
            className="pentagon"
            src="/images/bg-pentagon.svg"
            alt="pentagon"
          />
          <Scissors chosen={chosen} setChosen={setChosen} />
          <Paper chosen={chosen} setChosen={setChosen} />
          <Rock chosen={chosen} setChosen={setChosen} />
          <Lizard chosen={chosen} setChosen={setChosen} />
          <Spock chosen={chosen} setChosen={setChosen} />
        </div>
      </div>
      <div className="rules-container" onClick={() => setShow(!show)}>
        <h2 className="rules">rules</h2>
      </div>
    </div>
  );
};

export default Home;
