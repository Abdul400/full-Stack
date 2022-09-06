import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { nanoid } from 'nanoid';

let CalcButtons = [
  7,
  8,
  9,
  'DEL',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  '*',
];

function App() {
  const [value, setValue] = useState('');
  const [style, setStyle] = useState({ justifyContent: 'flex-start' });
  const [styles, setStyles] = useState({
    style1: false,
    style2: false,
    style3: false,
  });
  const Screen = () => {
    return (
      <div className="screen" style={screenStyle()}>
        <p className="screen_content">{value}</p>
      </div>
    );
  };
  //screen styling
  function screenStyle() {
    if (styles.style2 === true) {
      return { backgroundColor: 'white', color: 'black' };
    } else if (styles.style3 === true) {
      return { backgroundColor: '#1E0836', color: '#FEE534' };
    }
  }
  //grid-ccontainer styling
  function gridContainerStyle() {
    if (styles.style2 === true) {
      return { backgroundColor: '#D3CDCD' };
    } else if (styles.style3 === true) {
      return { backgroundColor: '#1E0836' };
    }
  }

  //reset button styling
  function resetButtonStyling() {
    if (styles.style2 === true) {
      return {
        backgroundColor: '#388187',
        borderBottom: '4px solid #1C6167',
      };
    } else if (styles.style3 === true) {
      return {
        backgroundColor: '#56077C',
        borderBottom: '4px solid #BC15F7',
      };
    }
  }
  function EqualsButtonStyling() {
    if (styles.style2 === true) {
      return {
        backgroundColor: '#C85401',
        borderBottom: '4px solid #873700',
      };
    } else if (styles.style3 === true) {
      return {
        backgroundColor: '#00DECF',
        borderBottom: '4px solid #00DECF',
        color: 'black',
      };
    }
  }
  const Calculator = () => {
    const getResults = () => {
      console.log(value);
      setValue(
        Number.isInteger(eval(value)) === true
          ? `${eval(value)}`
          : `${eval(value).toFixed(2)}`
      );
    };
    return (
      <div className="grid-container" style={gridContainerStyle()}>
        {CalcButtons.map((button) => {
          // let [deleteButtonStyle, setdeleteButtonStyle] = useState({
          //   backgroundColor: button == 'DEL' ? '#647299' : '',
          //   borderBottom: button == 'DEL' ? '4px solid #414E71' : '',
          //   color: button == 'DEL' ? 'white' : '',
          // });
          // let deleteButtonHover = () => {
          //   if (button === 'DEL') {
          //     console.log('delete 1');
          //     setdeleteButtonStyle((prevStyle) => {
          //       return {
          //         ...prevStyle,
          //         backgroundColor: 'DEL' ? '#A2B3E2' : '',
          //       };
          //     });
          //   }
          // };
          // let deleteMouseOut = () => {
          //   if (button === 'DEL') {
          //     ('use strict');
          //     console.log('delete');
          //     setdeleteButtonStyle((prevStyle) => {
          //       return {
          //         ...prevStyle,
          //         backgroundColor: 'DEL' ? '#647299' : '',
          //       };
          //     });
          //   }
          // };
          //buttons styling
          function buttonStyling() {
            if (styles.style2 === true) {
              //delete button styling
              if (button === 'DEL') {
                return {
                  backgroundColor: '#388187',
                  color: 'white',
                  borderBottom: '4px solid #1C6067',
                };
              } else {
                return {
                  backgroundColor: '#E5E4E0',
                  color: 'black',
                  borderBottom: '4px solid #A89D91',
                };
              }
            } else if (styles.style3 === true) {
              if (button === 'DEL') {
                return {
                  backgroundColor: '#57077A',
                  color: 'white',
                  borderBottom: '4px solid #BD1BF0',
                };
              } else {
                return {
                  backgroundColor: '#331B4D',
                  color: '#FEE83B',
                  borderBottom: '4px solid #BC15F7',
                };
              }
            }
          }
          return (
            <button
              className={button === 'DEL' ? 'button delete' : 'button'}
              value={button}
              key={nanoid()}
              onClick={(e) => {
                console.log(e.target.value);
                if (e.target.value !== 'DEL') {
                  setValue((prevNum) => {
                    return `${prevNum}${e.target.value}`;
                  });
                } else {
                  setValue((prevNum) => {
                    return prevNum.slice(0, -1);
                  });
                }
              }}
              style={buttonStyling()}
              // style={deleteButtonStyle}
              // onMouseEnter={() => deleteButtonHover()}
              // onMouseLeave={() => deleteMouseOut()}
            >
              {button}
            </button>
          );
        })}
        <button
          className="reset"
          style={resetButtonStyling()}
          onClick={() => setValue('')}
        >
          RESET
        </button>
        <button
          className="equals"
          style={EqualsButtonStyling()}
          onClick={() => eval(getResults())}
        >
          =
        </button>
      </div>
    );
  };
  const changeStyle = () => {
    console.log('hellow');
    if (style.justifyContent == 'flex-start') {
      console.log('sheesh');
      setStyle({ justifyContent: 'center', backgroundColor: '#D3CDCD' });
      setStyles((prevStyle) => {
        console.log('style2');
        return { ...prevStyle, style2: true };
      });
    } else if (style.justifyContent == 'center') {
      setStyle({ justifyContent: 'flex-end', backgroundColor: '#1E0836' });
      setStyles((prevStyle) => {
        return { ...prevStyle, style2: false, style3: true };
      });
    } else if (style.justifyContent == 'flex-end') {
      setStyle({ justifyContent: 'flex-start' });
      setStyles((prevStyle) => {
        return { ...prevStyle, style2: false, style3: false };
      });
    }
  };

  //app container style
  function Appstyle() {
    if (styles.style2 === true) {
      return { backgroundColor: 'white' };
    } else if (styles.style3 === true) {
      return { backgroundColor: '#17062A' };
    }
  }

  //top styling
  function containerStyle() {
    if (styles.style2 === true) {
      return { backgroundColor: 'white', color: 'black' };
    } else if (styles.style3 === true) {
      return { backgroundColor: '#17062A', color: '#FEE534' };
    }
  }
  //toggler styling
  function togglerStyle() {
    if (styles.style3 === true) {
      return { backgroundColor: '#00E1CD' };
    } else if (styles.style2 === true) {
      return { backgroundColor: '#C35606' };
    }
  }
  return (
    <div className="App" style={Appstyle()}>
      <div className="container">
        <div className="top" style={containerStyle()}>
          <div className="calc-text-container">
            <p className="calc">calc</p>
          </div>
          <div className="switch-container">
            <p className="theme">theme</p>
            <div className="num">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <div className="switch" onClick={() => changeStyle()} style={style}>
              <div className="toggler" style={togglerStyle()}></div>
            </div>
          </div>
        </div>
        <Screen />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
