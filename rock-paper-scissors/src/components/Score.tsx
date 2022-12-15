import React from 'react';

const Score = ({ count }: any) => {
  return (
    <div className="top-container">
      <div className="img-container">
        <img
          className="game-logo"
          src="/images/logo-bonus.svg"
          alt="game logo"
        />
      </div>
      <div className="score-container">
        <h2 className="score-text">score</h2>
        <h1 className="score">{count}</h1>
      </div>
    </div>
  );
};

export default Score;
