import React from 'react';
import worldLogo from '../assets/images/world.svg';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <img className="world_logo" src={worldLogo} alt="icon of the world" />
      <p className="travel_journal">my travel Journal</p>
    </div>
  );
}
