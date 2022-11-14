import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import myIcon from '../src/assets/images/icon-location.svg';
import arrow from '../src/assets/images/icon-arrow.svg';

let DefaultIcon = L.icon({
  iconUrl: myIcon,
  popupAnchor: [-3, -36],
  iconSize: [45, 55],
});

function App() {
  const [show, setShow] = useState(false);
  let [myData, setMyData]: any = useState(undefined);
  let [providedItem, setProvidedItem] = useState('');
  let myInput: any = useRef();

  function getData() {
    let ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let domainRegex = /([a-z0-9]+\.)*[a-z0-9]+\.[a-z]+/;
    if (myInput.current.value.match(ipRegex)) {
      console.log('ip detected');
      setProvidedItem(`ipAddress=${myInput.current.value}`);
    } else if (myInput.current.value.match(domainRegex)) {
      console.log('domain detected');
      setProvidedItem(`domain=${myInput.current.value}`);
    } else {
      console.log('none detected');
      alert('Please Provide a valid domain or ip address!');
    }
    setShow(true);

    console.log(providedItem);
  }

  console.log(providedItem);

  useEffect(() => {
    const getData = async () => {
      console.log(providedItem);
      const data = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_VvMJ1e4U3fzvYS0BLpWqtBdupCNus&${providedItem}`
      );
      const json = await data.json();
      console.log(json);
      setMyData(json);
    };
    getData();
    console.log(myData);

    // fetch(
    //   `https://geo.ipify.org/api/v2/country,city?apiKey=at_q4YOUGQscU4jkKlbRywvwAev4hYnp&${providedItem}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setMyData(data))
    //   .catch((err) => console.error(err));

    // console.log(myData);
  }, [providedItem]);

  useEffect(() => {
    var container: any = L.DomUtil.get('map');
    if (container != null) {
      container._leaflet_id = null;
    }
    console.log(myData);
    var map = L.map('map', {
      dragging: true,
      center: [
        myData !== undefined ? myData.location.lat : 51.505,
        myData !== undefined ? myData.location.lng : -0.09,
      ],
      zoom: 13,
    });
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg',
      }
    ).addTo(map);
    L.Marker.prototype.options.icon = DefaultIcon;
    var marker = L.marker([
      myData !== undefined ? myData.location.lat : 51.505,
      myData !== undefined ? myData.location.lng : -0.09,
    ]).addTo(map);
    marker.bindPopup('<b>This is the location!</b>').openPopup();
    myInput.current.value = '';
  }, [myData]);

  console.log(myData);

  return (
    <div className="App">
      <div className="top-container">
        <h2 className="header">IP Address Tracker</h2>
        <div className="formContainer">
          <input
            ref={myInput}
            className="myInput"
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button className="search" onClick={() => getData()}>
            <img src={arrow} alt="find" />
          </button>
        </div>
        {myData !== undefined && (
          <div className="result">
            <div className="ipAddressContainer">
              <p className="ipText">IP Address</p>
              <p className="ipNumber">
                {myData !== undefined ? myData.ip : ''}
              </p>
            </div>
            <div className="locationContainer">
              <p className="locationText">Location</p>
              <p className="location">
                {myData !== undefined
                  ? `${myData.location.city}, ${myData.location.country}, ${myData.location.geonameId}`
                  : ''}
              </p>
            </div>
            <div className="timezoneContainer">
              <p className="timezoneText">timezone</p>
              <p className="timezone">
                UTC {myData !== undefined ? myData.location.timezone : ''}
              </p>
            </div>
            <div className="ispContainer">
              <p className="ispText">ISP</p>
              <p className="isp">{myData !== undefined ? myData.isp : ''}</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom-container">
        <div id="map"></div>
      </div>
    </div>
  );
}

export default App;
