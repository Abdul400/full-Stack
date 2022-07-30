import React from 'react';
import '../styles/Body.css';
import locationIcon from '../assets/images/location-icon.svg';

export default function Body(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="image-container">
        <img className="travelImage" src={props.ImageSource} alt="" />
      </div>
      <div className="content-container">
        <div className="top-container">
          <img className="locationIcon" src={locationIcon} alt="" />
          <p className="country">{props.location}</p>
          <a
            className="google-maps-link"
            href={props.googlelink}
            target="_blank"
          >
            View on Goolge Maps
          </a>
        </div>
        <div className="bottom-container">
          <h1 className="title">{props.title}</h1>
          <p className="date">
            {props.startingDate} - {props.endingDate}
          </p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
